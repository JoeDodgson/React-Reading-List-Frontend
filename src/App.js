import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './styles/App.css';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/search"/>
        <Route path="/search" component={Search}/>
        <Route exact path="/saved" component={Saved}/>
      </Switch>
    </Router>
  );
}

export default App;
