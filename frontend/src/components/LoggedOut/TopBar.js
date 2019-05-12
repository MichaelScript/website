import React, {Component} from 'react';
import { connect } from 'react-redux';
class TopBar extends Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(){
        window.localStorage.removeItem('token');
        this.props.dispatch({
            type:"LOGOUT"
        })
    }
    render(){
        return <div className="top-bar">
            <div onClick={this.logout} className="login-button">Logout</div>
        </div>
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(TopBar);