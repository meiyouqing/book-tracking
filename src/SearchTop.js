import React, { Component } from 'react'
import { Link } from 'react-router-dom'

let timeoutId;

class SearchTop extends Component {
  state = {
    query: ''
  }
  handleInput = e => {
    const query = e.target.value.trim();
    this.setState({ query })

    clearTimeout(timeoutId);
    timeoutId = setTimeout(this.props.onSearch,300,query); //set a delay time to avoid fitching the searchAPI too frequently 
  }
  componentDidMount() {
    this.refs.searchInput.focus();
  }
  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            ref="searchInput"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={this.handleInput}
            />
        </div>
      </div>
    )
  }
}

export default SearchTop