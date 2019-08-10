import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
    render() {
        return (
            <div className="book">
                <h2 className="book-title">{this.props.title}</h2>
                <p className="author">Author: {this.props.author}</p>
                <p className="subtitle">{this.props.subtitle}</p>
                <img src={this.props.image} alt="book cover" />
                {/* <p className="description">{this.props.description}</p> */}
            </div>
        );
    }
}

export default Book;