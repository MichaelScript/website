import React, { Component } from 'react';
import '../components/common.css';
class Login extends Component{
    render(){
        return (
            <div className="login-container">
               <div className="login-box shadow">
                    <div>
                        <label for="email">Email: </label>
                        <input id="email"></input>
                    </div>
                    <div>
                        <label for="password">Password: </label>
                        <input id="password"></input>
                    </div>
                    <button id="login-button">Login</button>
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

login("me@michaelgreen.net","password");

export default Login;