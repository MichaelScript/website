import React, { Component } from 'react';
import '../css/common.css';
import { connect } from 'react-redux';
import { post } from '../util.js';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    login(email,password,callback){
        let url = '/api/auth/login'
        // Default options are marked with *
        post(url,{
            email:email,
            password:password
        },(data)=>{
            if(data["token"]){
                window.localStorage.setItem("token",data["token"]);
                this.props.dispatch({
                    type:"LOGIN"
                })
                window.location.href = "/";
            } else{
                alert("Error logging in");
            }
        })
    }
    
    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        this.login(this.state.email,this.state.password,(token)=>{
            window.localStorage.setItem("token",token);
        });
        event.preventDefault();
    }
    render(){
        return (
            <div className="login-container">
               <div className="login-box shadow">
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input id="email" value={this.state.email} onChange={this.handleEmail}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" value={this.state.password} onChange={this.handlePassword}></input>
                    </div>
                    <button onClick={this.handleSubmit} id="login-button">Login</button>
                </div>
            </div>
        )
    }   
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Login);