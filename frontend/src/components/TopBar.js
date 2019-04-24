import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class TopBar extends Component{
    render(){
        return (
            <div className="top-bar">
                <Link exact to="/"><div className="logo"><div>M</div></div></Link>
                <Link to="/login"><div className="login-button">Login</div></Link>
            </div>
        )
    }
}

export default TopBar;