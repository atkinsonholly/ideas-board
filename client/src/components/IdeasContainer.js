import React, { Component } from 'react';
import Idea from './Idea';
import IdeaForm from './IdeaForm';
import Notification from './Notification';
import Options from './Options';
import Adapter from '../adapters/API';
import ls from 'local-storage';

class IdeasContainer extends Component {

  state = {
    ideas: [],
    currentIdeaId: null,
    notification: '',
    type: 'creationDate',
    filter: ''
  }

  componentDidMount() {
    this.fetchIdeas()
  }

  fetchIdeas = async() => {
    const data = await Adapter.fetchIdeas()
    this.setState({
      ideas: data
    })
    ls.set('ideas', data);
  }

  deleteIdea = async (id) => {
    const data = await Adapter.deleteIdea(id)
    if (data !== null) {
      console.log(data.error)
      return false
    }
    const newIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({
      ideas: newIdeas
    })
  }

  newIdea = async() => {
    const data = await Adapter.newIdea();
    if (data.error) {
      console.log(data.error)
      return false
    }
    const newIdeas = [data, ...this.state.ideas]
    this.setState({
      ideas: newIdeas,
      currentIdeaId: data.id
    })
  }

  updateIdea = async (title, body) => {
    const idea = {title: title, body: body}
    const data = await Adapter.updateIdea(this.state.currentIdeaId, idea);
    if (data.error) {
      console.log(data)
      return false
    }
    const newIdeas = this.state.ideas.filter(element => element.id !== this.state.currentIdeaId)
    idea.id = this.state.currentIdeaId;
    newIdeas.push(idea);
    newIdeas.sort(function(a, b){return b.id - a.id});
    this.setState({
      ideas: newIdeas,
      notification: "All changes saved"
    })
  }

  resetNotification = () => {
    this.setState({
      notification: ''
    })
  }

  enableUpdate = (id) => {
    this.setState({
      currentIdeaId: id
    })
  }

  onChangeType = (value) => {
    this.setState({
      type: value
    })
  }

  setFilter = (value) => {
    this.setState({
      filter: value.toUpperCase()
    })
  }

  sortIdeas = () => {
    let newIdeas = [...this.state.ideas]
    if (this.state.type === "creationDate") {
      newIdeas = newIdeas.sort(function(a, b){return b.id - a.id});
    }
    if (this.state.type === "alphabetical") {
      newIdeas =  newIdeas.sort((a,b) => a.title.localeCompare(b.title));
    }
    return newIdeas.filter(idea => idea.title.toUpperCase().includes(this.state.filter))
  }

  render() {
    return (
      <div className="ideas_page">
        <div className="add_button_wrapper">
          <img className="add_button" onClick={this.newIdea} src={require("../images/add.png")} alt="add idea"/>
          <Notification notification= {this.state.notification}/>
        </div>
        <Options onChangeType={this.onChangeType} setFilter={this.setFilter}/>
        <div className="ideas_container">
          <div className="ideas_tiles_container">
            {this.sortIdeas().map(idea =>
              this.state.currentIdeaId === idea.id ?
                <IdeaForm
                  key={idea.id}
                  idea={idea}
                  update={this.updateIdea}
                  title={input => this.title = input}
                  resetNotification={this.resetNotification}
                  delete={this.deleteIdea}
                />
                :
                <Idea
                  key={idea.id}
                  idea={idea}
                  onClick={this.enableUpdate}
                  delete={this.deleteIdea}
                />
            )}
          </div>
        </div>
      </div>
    );
  }

}

export default IdeasContainer;
