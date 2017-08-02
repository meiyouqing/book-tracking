import React, { Component } from 'react'
//import { Router, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Book from './Book'

class BookShelf extends Component{
    static propType = {
        shelf: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        onSelectChange: PropTypes.func.isRequired
    }
    transfrom = shelf => (shelf.replace(/[A-Z]/g, (match)=>{
        return ' ' + match;
    }).trim().toUpperCase())
    render(){
        const { props } = this;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.transfrom(props.shelf) }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        props.books.filter(book => {
                            return book.shelf === props.shelf
                        })
                        .map(book => {
                            return <Book book={book} key={book.id} onSelectChange={props.onSelectChange}/>
                        })
                    }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf