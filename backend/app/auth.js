const express = require('express');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 12;
module.exports = function(app,db){
    const router = express.Router();
     /* Test User */
     const user = {
        "body":{
            "email":"me@michaelgreen.net",
            "password":"password"
        }
    }

    let createUser = (req,res)=>{
        let user = req.body;
        /* Hashing */
        bcrypt.hash(user.password,SALT_ROUNDS,(err,hash)=>{
            if(!err){
                db.query(`
                INSERT INTO users (email,password)
                VALUES ('${user.email}','${hash}')`,
                (err,results,fields)=>{
                    if(!err){
                        console.log("results: ", results);
                        console.log("fields: ", fields);
                    } else{
                        console.error(err);
                    }
                })        
            }
        })
    }
    // createUser(user);
    router.post('/createUser',createUser);

    let deleteUser = (req,res)=>{
        let user = req.body;
        db.query(`DELETE FROM users WHERE email = '${user.email}'`,
        function(err,results,fields){
            if(!err){
                console.log('Results: ', results);
            } else{
                console.error(err);
            }
        })
    }
    // deleteUser(user);

    let login = (req,res)=>{
        let user = req.body;
        db.query(`
            SELECT * FROM users WHERE email = '${user.email}'
        `,
        function(err,results,fields){
            console.log("results: ",results);
            if(results.length > 0){
                let foundUser = results[0];
                console.log('user password is: ', user.password);
                console.log('found user password is: ', foundUser.password);
                /* Comparing the user provided password hash to the hash in the db */
                bcrypt.compare(user.password, foundUser.password, function(err, matched) {
                    if(matched){
                        console.log("Succesful login");
                        res.send({"status":"Okay"});
                    } else{
                        console.log("Wrong password");
                    }
                });
            }
        })
    }
    // login(user);
    router.post('/login',login);

    return router;
}