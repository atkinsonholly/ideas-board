import React, {  Component } from 'react';

class Options extends Component {
  // Sort and filter functionality

  moveCaretAtEnd = (event) => {
    let temp_value = event.target.value
    event.target.value = ''
    event.target.value = temp_value
  }

  render() {
    return (
      <div className="options_container">
        <div className="sort_container">
          <h3 className="sort_header">Sort by</h3>
            <select className="select_bar" name="type" id="type" onChange={(event) => this.props.onChangeType(event.target.value)}>
              <option value="creationDate">Date created</option>
              <option value="alphabetical">Alphabetical order</option>
            </select>
        </div>
        <div className="filter_container">
          <form>
            <div className="sort_header">
              <h3>Search titles</h3>
            </div>
            <div className="search_input">
              <input
                className="search_bar"
                type="text"
                placeholder="Enter search term"
                onChange={event => this.props.setFilter(event.target.value)}
                value={this.props.search}
                autoFocus
                onFocus={this.moveCaretAtEnd}
                size="45"
               />
            </div>
          </form>
        </div>
      </div>
    )
  }

}
 export default Options;
