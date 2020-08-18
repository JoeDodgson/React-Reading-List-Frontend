import React from 'react';
import { NavBar } from '../NavBar'
import { Header } from '../Header'
import { SearchBar } from '../SearchBar'
import { BooksContainer } from '../BooksContainer'

export const Saved = () => {
  return (
    <>
        <NavBar />
        <Header  title="Saved Books"/>
        <BooksContainer />
    </>
  );
}

export default Saved;
