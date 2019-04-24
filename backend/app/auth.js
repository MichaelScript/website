const express = require('express');

module.exports = function(app,db){
    const router = express.Router();

    let createUser = (req,res)=>{
        let user = req.body;
        db.query(`
        INSERT INTO users (email,password)
        VALUES ('${user.email}','${user.password}')`,
        function(err,results,fields){
            if(!err){
                console.log("results: ", results);
                console.log("fields: ", fields);
            } else{
                console.error(err);
            }
        })
    }
    router.post('/createUser',createUser);


    /* Create User Test */
    const user = {
        "body":{
            "email":"me@michaelgreen.net",
            "password":"password"
        }
    }
    // createUser(user);

    let login = (req,res)=>{
        let user = req.body;
        db.query(`
            SELECT * FROM users WHERE email = '${user.email}'
        `,
        function(err,results,fields){
            console.log("results: ",results);
            let foundUser = results[0];
            if(user.password == foundUser.password){
                console.log("Succesful login");
            } else{
                console.log("Wrong password");
            }
        })
    }
    login(user);


    return router;
}