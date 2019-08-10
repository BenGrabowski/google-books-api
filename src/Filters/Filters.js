import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
    render() {
        return (
            <div className="Filters">
                <label htmlFor="print-type">Print Type:</label>
                <select name="print-type">
                    <option value="all">All</option>
                    <option value="book">Book</option>
                    <option value="magazine">Magazine</option>
                </select>
                <label htmlFor="book-type">Book Type:</label>
                <select name="book-type">
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-e-book">Free e-Book</option>
                    <option value="paid-e-book">Paid e-Book</option>
                    <option value="e-book">e-Book</option>
                </select>
            </div>
        );
    }
}

export default Filters;