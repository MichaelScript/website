import React, { Component } from 'react';
import './App.css';
import Login from './routes/Login.js'
import Home from './routes/Home.js'
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
