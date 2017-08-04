import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchPage from './SearchPage'
import Home from './Home'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  handleMoveBook = (shelf, book, callback) => {
    BooksAPI.update(book, shelf)
      .then(res => {
        callback();
        if(book.shelf === 'none'){ //add a new book
          book.shelf = shelf;
          this.setState(state => ({
            books: state.books.concat([book])
          }))
          return;
        }
        this.setState(state => ({
          books: state.books.filter(v => {
            if (v.id === book.id) {
              v.shelf = shelf;
              if (shelf === 'none') return false;
            }
            return true;
          })
        }))
      })
      .catch(err => {
        alert(err.message);
      })
  }
  handleAddBook = (shelf, book) => {
    BooksAPI.update(book, shelf)
      .then(res => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.concat([ book ])
        }))
      })
      .catch(err => {
        alert(err.message);
      })
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books });
      })
      .catch(err => {
        alert(err.message);
      })
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Home
            books={this.state.books}
            onSelectChange={this.handleMoveBook}
            />
        )} />
        <Route path="/search" render={() => (
          <SearchPage
            books={this.state.books}
            onSelectChange={this.handleMoveBook}
         />
        )} />
      </div>
    )
  }
}

export default BooksApp
