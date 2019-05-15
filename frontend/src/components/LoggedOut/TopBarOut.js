import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

class TopBar extends Component{
    render(){
        return (
            <div className="top-bar shadow">
                <Link className="logo" exact to="/">MG</Link>
                <Link to="/login"><div className="login-button">Login</div></Link>
            </div>
        )
    }
}

export default TopBar;