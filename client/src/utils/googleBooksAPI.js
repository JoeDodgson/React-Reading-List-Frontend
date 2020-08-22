import axios from "axios";

require("dotenv").config();

// Export an object containing methods used for accessing the Google Books API
export default {
  // Searches for a book using ID
  getBookById: async id => {
    const queryUrl = `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_API_KEY}`;
    try {
      const res = await axios.get(queryUrl);
      return res;
    }
    catch (err) {
      console.log(`ERROR: googleBooksAPI.js - getBookById() - ${err}`);
    }
  },
  
  // Searches for a book using a search term
  getBookBySearch: async search => {
    const queryUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&key=${process.env.REACT_APP_API_KEY}`;
    try {
      const res = await axios.get(queryUrl);
      return res;
    }
    catch (err) {
      console.log(`ERROR: googleBooksAPI.js - getBookBySearch() - ${err}`);
    }
  }
};
