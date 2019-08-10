import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSearch(e.target.value);
    }
    
    render() {
        return (
            <div className="SearchBar">
                <form onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="search-term">Search:</label>
                <input
                    type="text"
                    name="search"
                    id="search" />
                <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;