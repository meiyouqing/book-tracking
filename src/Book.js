import React from 'react'
import PropTypes from 'prop-types'

import Loading from './Loading'

class Book extends React.PureComponent{
    static propTypes = {
        book: PropTypes.object.isRequired,
        onSelectChange: PropTypes.func.isRequired
    }
    state = {
        loading: false
    }
    handleChange = e => {
        this.setState({ loading: true })
        const selected = e.target.value;
        this.props.onSelectChange(selected, this.props.book, () => {
            this.setState({ loading: false })
        });
    }
    render(){
        const { props, state } = this;
        return (
            <li>
                <div className="book f-pr">
                    {
                        state.loading ?
                            <Loading /> :
                            ''
                    }
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`, backgroundRepeat:'no-repeat' }}></div>
                        <div className="book-shelf-changer">
                            <select
                            onChange={this.handleChange}
                            defaultValue={props.book.shelf}
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