import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'
import Loading from './Loading'

class Home extends Component {
    constructor(){
        super(...arguments);
        this.shelfs = ['currentlyReading', 'wantToRead', 'read'];
    }
    render() {
        const { props } = this;
        const content = !props.books.length ?
            <Loading /> :
            (
                <div className="list-books-content">
                    {
                        this.shelfs.map((shelf, i) => {
                            return <BookShelf shelf={shelf} books={props.books} key={i} onSelectChange={props.onSelectChange} />
                        })
                    }
                </div>
            );
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    {content}
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Home