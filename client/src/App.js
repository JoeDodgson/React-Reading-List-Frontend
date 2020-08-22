import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';

function App() {
  return (
    <Router>
      <Route path="/search" component={Search}/>
      <Route exact path="/saved" component={Saved}/>
    </Router>
  );
}

export default App;
