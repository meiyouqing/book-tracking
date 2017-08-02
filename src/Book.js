import React, { Component } from 'react'
//import { Router, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Book extends Component{
    static propTypes = {
        book: PropTypes.object.isRequired,
        onSelectChange: PropTypes.func.isRequired
    }
    state = {
        currentShelf: this.props.book.shelf
    }
    handleChange = e => {
        e.preventDefault();
        const selected = e.target.value;
        this.setState({ currentShelf: selected });
        this.props.onSelectChange(selected, this.props.book);
    }
    render(){
        const { state, props } = this;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`, backgroundRepeat:'no-repeat' }}></div>
                        <div className="book-shelf-changer">
                            <select
                            onChange={this.handleChange}
                            defaultValue={state.currentShelf}
                            >
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{props.book.title}</div>
                    <div className="book-authors">{props.book.authors.length > 1 ? props.book.authors[0]+', etc' : props.book.authors[0]}</div>
                </div>
            </li>

        )
    }
}

export default Book