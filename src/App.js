import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import SearchMovie from './component/SearchMovie';
import MovieDetail from './component/MovieDetail';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/movie_detail" component={MovieDetail} />
          <Route exact path="/" component={SearchMovie} />   
      </Switch>
    </Router>
  );
}

export default App;
