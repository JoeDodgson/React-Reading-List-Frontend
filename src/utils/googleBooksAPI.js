import axios from "axios";

// Require in API key from .env
require("dotenv").config();
console.log(process.env);

// Export an object containing methods used for accessing the Google Books API
export default {
  // Method to search for a book using ID
  getBookById: async id => {
    const queryUrl = `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_API_KEY}`;
    console.log(queryUrl);
    try {
      const res = await axios.get(queryUrl);
      return res;
    }
    catch (err) {
      console.log(`ERROR: googleBooksAPI.js - getBookById() - ${err}`);
    }
  },
  // Method to search for a book using a search term
  getBookBySearch: async search => {
    const queryUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&key=${process.env.REACT_APP_API_KEY}`;
    console.log(queryUrl);
    try {
      const res = await axios.get(queryUrl);
      return res;
    }
    catch (err) {
      console.log(`ERROR: googleBooksAPI.js - getBookBySearch() - ${err}`);
    }
  }
};
