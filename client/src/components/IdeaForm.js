import React, { Component } from 'react';

class IdeasForm extends Component {

  state = {
    title: this.props.idea.title,
    body: this.props.idea.body
  }

  handleInput = (event) => {
    this.props.resetNotification()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleBlur = () => {
    this.props.update(this.state.title, this.state.body)
  }

  handleDelete = () => { this.props.delete(this.props.idea.id) }

  render() {
    return (
      <div className="idea">
        <div className="buttons_container">
          {(140-this.state.body.length) <= 15? <p className="counter">{140-this.state.body.length} characters</p> : <p></p>}
          <div className="button_wrapper">
            <img className="delete_button" onClick={this.handleDelete} src={require("../images/delete.png")} alt="delete idea"/>
          </div>
        </div>
      	<form onBlur={this.handleBlur} className="form_text_box" >
					<input
            maxLength="30"
            className='idea_title'
            type="text" name="title"
            placeholder='Title'
            value={this.state.title}
            onChange={this.handleInput}
            ref={this.props.title}
          />
					<textarea
            maxLength="140"
            className='idea_body'
            name="body"
            placeholder='Description'
            value={this.state.body}
            onChange={this.handleInput}>
          </textarea>
      	</form>
      </div>
    );
  }

}

export default IdeasForm;
