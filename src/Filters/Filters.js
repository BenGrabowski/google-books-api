import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
    render() {
        return (
            <div className="Filters">
                <label htmlFor="print-type">Print Type:</label>
                <select name="print-type" onChange={e => this.props.changePrintType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Book</option>
                    <option value="magazines">Magazine</option>
                </select>
                <label htmlFor="book-type">Book Type:</label>
                <select name="book-type" onChange={e => this.props.changeBookType(e.target.value)}>
                    <option>No Filter</option>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">Free e-Book</option>
                    <option value="paid-ebooks">Paid e-Book</option>
                    <option value="ebooks">e-Book</option>
                </select>
            </div>
        );
    }
}

export default Filters;