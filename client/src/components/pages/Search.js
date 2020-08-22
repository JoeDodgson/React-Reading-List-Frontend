import React, { Component } from 'react';
import { NavBar } from '../NavBar'
import { Header } from '../Header'
import SearchBar from '../SearchBar'
import { BooksContainer } from '../BooksContainer'
import googleBooksAPI from '../../utils/googleBooksAPI'
import savedBooksAPI from '../../utils/savedBooksAPI'

class Search extends Component {
  state = {
    search: "",
    books: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };
  
  handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const results = await googleBooksAPI.getBookBySearch(this.state.search);
      let books = [];
      if (results.data.items.length > 0) {
        results.data.items.forEach(result => {
          const { id } = result;
          const description = result.volumeInfo.description || "Description not available";
          const infoLink = result.volumeInfo.infoLink || "https://books.google.com/";
          const title = result.volumeInfo.title || "Title not available";
          const imageLinks = result.volumeInfo.imageLinks || [];
          let authors;
          if (result.volumeInfo.authors) {
            authors = result.volumeInfo.authors.join(", ");
          }
          else {
            authors = "Authors not available"
          }
          const image = imageLinks.smallThumbnail || imageLinks.thumbnail || imageLinks.largeThumbnail || "https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png";
          const book = {
            id,
            authors,
            description,
            image,
            infoLink,
            title
          }
          books.push(book);
        })
      }
      this.setState({ ...this.state, books });
    }
    catch (err) {
      console.log(`ERROR: Search.js - handleFormSubmit() - ${err}`);
    }
  };

  // Adds a book to the saved books database
  addBook = async bookData => {
    try {
      const savedBook = await savedBooksAPI.saveBook(bookData);
    }
    catch (err) {
      console.log(`ERROR: Search.js - addBook() - ${err}`);
    }
  };

  render() {
    return (
      <>
          <NavBar active="search"/>
          <Header title="Results"/>
          <SearchBar             
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <BooksContainer 
            heading="Search Results"
            search={this.state.search}
            books={this.state.books}
            addBook={this.addBook}
          />
      </>
    );
  }
}

export default Search;
