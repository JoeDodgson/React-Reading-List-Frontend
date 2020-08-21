import React, { Component } from 'react';
import { NavBar } from '../NavBar'
import { Header } from '../Header'
import SearchBar from '../SearchBar'
import { BooksContainer } from '../BooksContainer'
import API from '../../utils/googleBooksAPI'

class Search extends Component {
  state = {
    search: "",
    results: [],
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
      this.setState({ ...this.state, results });
      console.log(results);
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
            books={this.state.results}
          />
      </>
    );
  }
}

export default Search;
