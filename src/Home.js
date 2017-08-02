import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'

class Home extends Component {
    render() {
        const { props } = this;
        const shelfs = [];
        props.books.forEach(v => {
            if(shelfs.indexOf(v.shelf) === -1) shelfs.push(v.shelf);
        })
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        {
                            shelfs.map((shelf, i) => {
                                return <BookShelf shelf={shelf} books={props.books} key={i} onSelectChange={props.onSelectChange} />
                            })
                        }
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Home