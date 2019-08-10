import React from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import Filters from './Filters/Filters';
import BookList from './BookList/BookList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printType: '',
      bookType: '',
      books: []
    };
  }

  componentDidMount() {
    const query = this.state.searchTerm;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDoLZmFxyg6izNhLzuqo-f6wjqoYJ3Kcr8`;
    console.log(url);
    
    fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong, please try again later');
      } else{
        return response.json();
      }
    })
    .then(data => {
      const books = data.
      
      this.setState({

      })
    })
    .catch(error => {
      this.setState({
        error: error.message
      });
    });
  }

  handleSearch = (term) => {
    // this.setState({
    //   searchTerm: term
    // });
    console.log('handleSearch ran');
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar handleSearch={term => this.handleSearch(term)} />
        <Filters />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
