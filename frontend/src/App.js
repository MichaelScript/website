import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js'
import Login from './routes/Login.js'
import Home from './routes/Home.js'
import TitleScreen from './components/TitleScreen.js';
import TopBar from './components/TopBar.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <TopBar></TopBar>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
