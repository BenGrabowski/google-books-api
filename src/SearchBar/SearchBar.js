import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSearch(this.myRef.current.value);
    }
    
    render() {
        return (
            <div className="SearchBar">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="search-term">Search:</label>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        ref={this.myRef} />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;