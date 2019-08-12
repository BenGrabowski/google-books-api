import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
    // renderDescription() {
    //     if(this.props.selected === this.props.)
    // }
    
    renderDescription() {
        const description = <p className="description">{this.props.description}</p>;
        return description;
    }

    render() {        
        return (
            <div className="book">
                <h2 className="book-title" onClick={this.props.setSelected(this.key)}>{this.props.title}</h2>
                <p className="author">{this.props.author}</p>
                <p className="subtitle">{this.props.subtitle}</p>
                <img src={this.props.image} alt="book cover" />
                {/* {description} */}
            </div>
        );
    }
}

export default Book;