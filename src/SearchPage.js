import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

import SearchTop from './SearchTop'
import Book from './Book'
import Loading from './Loading'

class SearchPage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }
    state = {
        matchedBooks: [],
        loaing: false,
        noResult: false
    }
    handleSearch = query => {
        //console.log(query)
        if(!query) {
            this.setState({ matchedBooks: [] });
            return;
        }
        this.setState({ loading: true, noResult: false });
        BooksAPI.search(query, 100)
            .then(matchedBooks => {
                this.setState({ loading: false });
                if (matchedBooks.error) {
                    this.setState({ noResult: true });
                    return;
                }
                const { books } = this.props;
                matchedBooks.forEach(matchBook => {
                    matchBook.shelf = 'none'; //seting the default value of 'shelft' property of matchBook which is not in my shelf
                    for (let i = 0, len = books.length; i < len; i++) {
                        if (books[i].id === matchBook.id) {
                            matchBook.shelf =  books[i].shelf; //seting the right value of the book which is already in my shelf
                        }
                    }
                })
                this.setState({ matchedBooks })
            })
            .catch(err => {
                console.log(err)
                alert(err.message)
            })
    }
    render() {
        const { state, props } = this;
        const content = state.loading ?
            <Loading /> :
            (
                state.noResult ?
                    <div className="no-result">sorry,no result by the current query</div> :
                    (
                        <ol className="books-grid">
                            {
                                state.matchedBooks.map((book) => (
                                    <Book book={book} onSelectChange={props.onSelectChange} key={book.id} />
                                ))
                            }
                        </ol>
                    )
            )

        return (
            <div>
                <SearchTop onSearch={this.handleSearch} />
                <div className="search-books-results">
                    {content}
                </div>
            </div>
        )
    }
}

export default SearchPage