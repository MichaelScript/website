import React, {Component} from 'react';
import TopBar from './LoggedIn/TopBar.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashbaord from '../routes/Dashboard.js';
import Dashboard from '../routes/Dashboard.js';
class LoggedIn extends Component{
    render(){
        return (<div>
        <Router>
            <TopBar></TopBar>
            <div className="container">
              <Route exact path="/" component={Dashboard} />
            </div>
        </Router>
        </div>)
    }
}

export default LoggedIn;