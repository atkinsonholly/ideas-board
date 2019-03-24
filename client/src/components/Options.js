import React, {  Component } from 'react';

class Options extends Component {
  // Sort

  render() {
    return (
      <div className="sort_container">
        <h3 className="sort_header">Sort by</h3>
          <select className="select_bar" name="type" id="type" onChange={(event) => this.props.onChangeType(event.target.value)}>
            <option value="creationDate">Date created</option>
            <option value="alphabetical">Alphabetical order</option>
          </select>
      </div>
    )
  }

}
 export default Options;
