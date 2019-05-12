import React, {Component} from 'react';
import TopBar from './LoggedOut/TopBar.js'
class LoggedIn extends Component{
    render(){
        return (<div>
            <TopBar></TopBar>
        </div>)
    }
}

export default LoggedIn;