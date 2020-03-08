import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './container/Landing/Landing';
// import Header from './component/Header/Header';
import SearchResult from './container/SearchResult/SearchResult';
import {   BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path = '/' exact component = {Landing} />
      <Route path = '/result' component = {SearchResult} />
    </Router>
    
  );
}

export default App;
