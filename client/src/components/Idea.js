import React, { Component } from 'react';

class Idea extends Component {

  handleClick = () => { this.props.onClick(this.props.idea.id) }

	handleDelete = () => { this.props.delete(this.props.idea.id) }

  render () {
    return (
      <div className="idea">
        <div className="idea_container">
          <div className="buttons_container">
            <div className="button_wrapper">
              <img className="delete_button" onClick={this.handleDelete} src={require("../images/delete.png")} alt="delete idea"/>
            </div>
          </div>
          <div className="idea_text_box">
            <h3 className="idea_title" onClick={this.handleClick}>{this.props.idea.title}</h3>
            <p className="idea_body" onClick={this.handleClick}>{this.props.idea.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Idea;
