import React, { useEffect, useState } from 'react';
import { NavBar } from '../NavBar'
import { Header } from '../Header'
import { BooksContainer } from '../BooksContainer'
import savedBooksAPI from '../../utils/savedBooksAPI'

const Saved = () => {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, []) 

  // Loads all books and sets them to books
  const loadBooks = async () => {
    try {
      const savedBooks = await savedBooksAPI.getSavedBooks();
      setBooks(savedBooks.data);
    }
    catch (err) {
      console.log(`ERROR: Saved.js - loadBooks() - ${err}`);
    }
  };

  // Removes a book from the saved books database
  const removeBook = async id => {
    try {
      const removedBook = await savedBooksAPI.deleteBook(id);
      window['location'].reload();
    }
    catch (err) {
      console.log(`ERROR: Search.js - addBook() - ${err}`);
    }
  };

  return (
    <>
      <NavBar 
        active="saved"
      />
      <Header 
        title="Saved Books"
      />
      <BooksContainer 
        heading="Saved Books" 
        books={books}
        removeBook={removeBook}
      />
    </>
  );
}

export default Saved;
