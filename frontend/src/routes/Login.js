import React, { Component } from 'react';
import '../components/common.css';
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
        fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({
                "email":email,
                "password":password
            })
        }).then(function(response){
            response.json().then(function(data){
                callback(data)
            })
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
            console.log(token);
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

function login(email,password){
    let url = '/api/auth/login'
    // Default options are marked with *
    fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify({
            "email":email,
            "password":password
        })
    }).then(function(response){
        response.json().then(function(data){
            console.log(data);
        })
    })
}

// login("me@michaelgreen.net","password");

export default Login;