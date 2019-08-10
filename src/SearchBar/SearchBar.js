import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <form onSubmit={this.props.handleSearch()}>
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