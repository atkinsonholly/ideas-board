import React, {  Component } from 'react';

class Searchbar extends Component {
  // Filter functionality

  render() {
    return (
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
              size="20"
             />
          </div>
        </form>
      </div>
    )
  }

}
 export default Searchbar;
