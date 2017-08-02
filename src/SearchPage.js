import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

import SearchTop from './SearchTop'
import Book from './Book'

class SearchPage extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired
    }
    state = {
        matchedBooks:[]
    }
    handleSearch = query => {
        BooksAPI.search(query, 100)
        .then(matchedBooks => {
            const { books } = this.props;
            const filteredBooks =  matchedBooks.filter(matchBook => {
                for(let i=0,len=books.length; i<len; i++){
                    if(books[i].id === matchBook.id) {
                        return false; //remove the matchedBook which is already in my shelf
                    }
                }
                matchBook.shelf = 'none'; //seting the default value of 'shelft' property of matchBook which is not in my shelf
                return true;

            })
            this.setState({ matchedBooks: filteredBooks })
        })
        .catch(err => {
            alert(err.message)
        })
    }
    handleAdd = (shelf, book) => {
        this.setState(state => ({
            matchedBooks: state.matchedBooks.filter(v => (v.id !== book.id))
        }))
        this.props.onSelectChange(shelf, book)
    }
    render(){
        const { state } = this;
        return(
            <div>
                <SearchTop onSearch={this.handleSearch} />
                <div className="search-books-results">
                <ol className="books-grid">
                {
                    state.matchedBooks.map((book) => (
                        <Book book={book} onSelectChange={this.handleAdd} key={book.id} />
                    ))
                }
                </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage