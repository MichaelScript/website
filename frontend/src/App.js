import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js'
import TopBar from './components/TopBar.js';
import TitleScreen from './components/TitleScreen.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <TopBar></TopBar>
        <TitleScreen></TitleScreen>
        <Card></Card>
      </div>
    );
  }
}

export default App;
