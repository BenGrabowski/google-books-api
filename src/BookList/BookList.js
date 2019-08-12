import React, { Component } from 'react';
import './BookList.css';
import Book from '../Book/Book';

class BookList extends Component {
    render() {
        const bookList = this.props.books.map((book, index) => {
            const author = book.author ? book.author[0] : "";
            
            return <Book
                        key={index}
                        title={book.title}
                        author={author}
                        price={book.price}
                        subtitle={book.subtitle}
                        description={book.description}
                        image={book.imageLinks.smallThumbnail}
                        printType={book.printType}
                        selected={this.props.selected}
                        setSelected={this.props.setSelected}
                        />
        });
        
        return (
            <div className="Booklist">
                <ul className="results">
                    { bookList }
                </ul>
            </div>
        );
    }
}

export default BookList;