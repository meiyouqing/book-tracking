import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchTop extends Component{
    state = {
      query: ''
    }
    handleInput = e => {
      this.setState({
        query: e.target.value.trim()
      })
    }
    handleSubmit = e => {
      e.preventDefault();
      this.props.onSearch(this.refs.searchInput.value)
    }
    render(){
        return (
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  ref="searchInput"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={this.handleInput}
                  />
              </form>
            </div>
          </div>
        )
    }
}

export default SearchTop