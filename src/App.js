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

  handleSearch(term) {
    const query = encodeURIComponent(term);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDoLZmFxyg6izNhLzuqo-f6wjqoYJ3Kcr8`;
    console.log(term);
    console.log(url);
    
    // fetch(url)
    // .then(response => {
    //   if(!response.ok) {
    //     throw new Error('Something went wrong, please try again later');
    //   } else{
    //     return response.json();
    //   }
    // })
    // .then(data => {
    //   const books = data.items.map(book => book.volumeInfo)
      
    //   this.setState({
    //     books
    //   })
    // })
    // .catch(error => {
    //   this.setState({
    //     error: error.message
    //   });
    // });
  }
  

  updatePrintType(type) {
    this.setState({
      printType: type
    });
  } 

  updateBookType(bookType) {
    this.setState({
      bookType: bookType
    })
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
