import axios from "axios";

// Require in API key from .env
require("dotenv").config();

// Export an object containing methods used for accessing the saved books from the MongoDB database
export default {
  // Returns all saved books
  getSavedBooks: async () => {
    try {
      const res = await axios.get("/api/books");
      return res;
    }
    catch (err) {
      console.log(`ERROR: savedBooksAPI.js - getSavedBooks() - ${err}`);
    }
  },
  
  // Saves a book to the database
  saveBook: async bookData => {
    try {
      const res = await axios.post("/api/books", bookData);
      return res;
    }
    catch (err) {
      console.log(`ERROR: savedBooksAPI.js - saveBook() - ${err}`);
    }
  },
  
  // Deletes the book with the given id (**NOT _id**)
  deleteBook: async id => {
    try {
      const res = await axios.delete("/api/books/" + id);
      return res;
    }
    catch (err) {
      console.log(`ERROR: savedBooksAPI.js - deleteBook() - ${err}`);
    }
  },
};
