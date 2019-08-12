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
      printType: 'all',
      bookType: 'partial',
      books: [],
      selected: -1
    };
  }

  handleSearch(term) {
    const query = encodeURIComponent(term);
    // const query = term;
    const printType = encodeURIComponent(this.state.printType);
    const bookType = encodeURIComponent(this.state.bookType);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${printType}&filter=${bookType}&key=AIzaSyDoLZmFxyg6izNhLzuqo-f6wjqoYJ3Kcr8`;
    // const url = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyDoLZmFxyg6izNhLzuqo-f6wjqoYJ3Kcr8&q=Colorado&printType=books&filter=full'
    console.log(term);
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
      const books = data.items.map(book => book.volumeInfo)
      
      this.setState({
        books
      })
    })
    .catch(error => {
      this.setState({
        error: error.message
      });
    });

    this.setState({
      searchTerm: term
    });
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

  setSelected(key) {
    this.setState({
      selected: key
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar handleSearch={term => this.handleSearch(term)} />
        <Filters 
          changePrintType={type => this.updatePrintType(type)}
          changeBookType={bookType => this.updateBookType(bookType)}/>
        <BookList 
          books={this.state.books}
          selected={this.state.selected}
          setSelected={key => this.setSelected(key)} />
      </div>
    );
  }
}

export default App;
