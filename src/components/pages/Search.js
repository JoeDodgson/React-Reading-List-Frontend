import React, { Component } from 'react';
import { NavBar } from '../NavBar'
import { Header } from '../Header'
import SearchBar from '../SearchBar'
import { BooksContainer } from '../BooksContainer'
import API from '../../utils/googleBooksAPI'

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
      const results = await API.getBookBySearch(this.state.search);
      let books = [];
      results.data.items.forEach(result => {
        const { id } = result;
        const { description, imageLinks, infoLink, title } = result.volumeInfo;
        let authors;
        if (result.volumeInfo.authors) {
          authors = result.volumeInfo.authors.join(", ");
        }
        else {
          authors = "Information not available"
        }
        const image = imageLinks.smallThumbnail || imageLinks.thumbnail || imageLinks.largeThumbnail;
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
      this.setState({ ...this.state, books });
    }
    catch (err) {
      console.log(`ERROR: Search.js - handleFormSubmit() - ${err}`);
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
          />
      </>
    );
  }
}

export default Search;
