import React, {Component} from 'react';
import LoggedIn from './LoggedIn.js'
import LoggedOut from './LoggedOut.js'
import { connect } from 'react-redux';

class AppContainer extends Component{
    render(){
        if(this.props.loggedIn){
            return <LoggedIn></LoggedIn>;
        } else{
            return <LoggedOut></LoggedOut>;
        }
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.login.loggedIn
    };
}

export default connect(mapStateToProps)(AppContainer);