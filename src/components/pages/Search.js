import React from 'react';
import { NavBar } from '../NavBar'
import { Header } from '../Header'
import { SearchBar } from '../SearchBar'
import { BooksContainer } from '../BooksContainer'

export const Search = () => {
  return (
    <>
        <NavBar />
        <Header title="Results"/>
        <SearchBar />
        <BooksContainer />
    </>
  );
}

export default Search;
