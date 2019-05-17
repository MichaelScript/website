import React, {Component} from 'react';
import Login from '../routes/Login.js'
import Home from '../routes/Home.js'
import Blog from '../routes/Blog.js'
import { BrowserRouter as Router, Route } from "react-router-dom";

class LoggedOut extends Component{
    render(){
        return (<div>
           <Router>
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/blog" component={Blog} />
            </div>
          </Router>
        </div>)
    }
}

export default LoggedOut;