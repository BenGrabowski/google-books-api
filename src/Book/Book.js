import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
    renderDescription() {
        const description = (this.props.selected === this.props.index)
            ? <p className="description">{this.props.description}</p>
            : " ";

            return description;
    }

    render() {        
        return (
            <div className="book">
                <h2 className="book-title" onClick={key => this.props.setSelected(this.props.index)}>{this.props.title}</h2>
                {/* <h2 className="book-title">{this.props.title}</h2> */}
                <p className="author">{this.props.author}</p>
                <p className="subtitle">{this.props.subtitle}</p>
                <img src={this.props.image} alt="book cover" />
                {this.props.selected === this.props.index && this.renderDescription()}
            </div>
        );
    }
}

export default Book;