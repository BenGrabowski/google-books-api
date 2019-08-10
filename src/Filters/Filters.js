import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
    render() {
        return (
            <div className="Filters">
                <label htmlFor="print-type">Print Type:</label>
                <select name="print-type"></select>
                <label htmlFor="book-type">Book Type:</label>
                <select name="book-type"></select>
            </div>
        );
    }
}

export default Filters;