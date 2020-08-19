import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class SearchBar extends Component {
    // Setting the component's initial state
    state = {
      search: "",
    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;
  
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      if (!this.state.search) {
        alert("Enter the name of a book");
      }
  
      this.setState({
        search: ""
      });
    };
  
    render() {
      // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div className="row searchbar-container">
                <div className="col-10" style={{margin: "0 auto"}}>
                    <form className="form">
                        <div className="row">
                            <div className="col-1"></div>
                            <input
                            className="col-7"
                            value={this.state.search}
                            name="search"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Search for a book"
                            />
                            <div className="col-1"></div>
                            <Button id="search-button" className="col-2" onClick={this.handleFormSubmit} variant="contained" color="primary">
                                Submit
                            </Button>
                            <div className="col-1"></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;