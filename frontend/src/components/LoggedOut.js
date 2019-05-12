import React, {Component} from 'react';
import Login from '../routes/Login.js'
import Home from '../routes/Home.js'
import TopBar from './LoggedIn/TopBar.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LoggedOut extends Component{
    render(){
        return (<div>
           <Router>
            <TopBar></TopBar>
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
            </div>
          </Router>
        </div>)
    }
}

export default LoggedOut;