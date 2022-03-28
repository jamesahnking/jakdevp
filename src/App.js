// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './pages';
import {BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
