import React, { Component } from 'react';
import './BookList.css';
import Book from '../Book/Book';

class BookList extends Component {
    render() {
        const bookList = this.props.books.map((book, index) => {
            return <Book
                        key={index}
                        title={book.title}
                        author={book.authors[0]}
                        price={book.price}
                        subtitle={book.subtitle}
                        description={book.description}
                        image={book.imageLinks.smallThumbnail}
                        printType={book.printType}
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