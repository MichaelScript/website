import React, { Component } from 'react';
import './App.css';
import './css/common.css';
import Login from './routes/Login.js'
import Home from './routes/Home.js'
import TopBar from './components/TopBar.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {createStore} from 'redux';
import { Provider } from 'react-redux';


let initialState = {
  token: ''
}

let reducer = (state=initialState, action)=>{
  console.log('reducer', state, action);
  switch(action.type){
    case 'UPDATE_TOKEN':
      console.log('updating token')
      return {
        token: action.token
      }
    default:
      return state
  }
  return state;
}
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <TopBar></TopBar>
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
