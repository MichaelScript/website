const express = require('express');

module.exports = function(app){
    const router = express.Router();

    let createUser = (req,res)=>{
        console.log(req.body);
    }
    router.post('/createUser',createUser);

    const user = {
        "body":{
            "email":"me@michaelgreen.net",
            "password":"password"
        }
    }
    createUser(user);

    let login = (req,res)=>{
        console.log(req.body);
    }


    return router;
}