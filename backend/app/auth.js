const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const SALT_ROUNDS = 12;
const file_path = path.resolve(__dirname, 'private.key')
const PRIVATE_KEY  = fs.readFileSync(path.resolve(__dirname, 'keys/jwtRS256.key'), 'utf8');
const signOptions = {
    expiresIn:  "30d",    // 30 days validity
    algorithm:  "RS256"    
}
module.exports = function(app,db){
    const router = express.Router();
     /* Test User and response */
     const user = {
        "body":{
            "email":"me@michaelgreen.net",
            "password":"password"
        }
    }
    const test_res = {
        "send":function(data){
            console.log("Sending data to client: ", data);
        }
    }

    let createUser = (req,res)=>{
        let user = req.body;
        /* Hashing */
        bcrypt.hash(user.password,SALT_ROUNDS,(err,hash)=>{
            if(!err){
                db.query(`
                INSERT INTO users (email,password)
                VALUES (${db.escape(user.email)},${db.escape(hash)})`,
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
        db.query(`DELETE FROM users WHERE email = ${db.escape(user.email)}`,
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
            SELECT * FROM users WHERE email = ${db.escape(user.email)}
        `,
        function(err,results,fields){

            console.log("results: ",results);
            if(!err && results && results.length > 0){
                let foundUser = results[0];
                console.log('user password is: ', user.password);
                console.log('found user password is: ', foundUser.password);
                /* Comparing the user provided password hash to the hash in the db */
                bcrypt.compare(user.password, foundUser.password, function(err, matched) {
                    if(matched){
                        console.log("Succesful login");
                        let token = jwt.sign({
                            "email":user.email
                        }, PRIVATE_KEY, signOptions);
                        console.log("Token is: ", token);
                        /* Adding session token to the tokens table */
                        db.query(`
                            INSERT INTO tokens (token,user_id)
                            VALUES (${db.escape(token)},${db.escape(foundUser.id)})
                        `,(err,results,fields)=>{
                            if(!err){
                                res.send({"token":token});
                            } else{
                                console.error(err);
                                res.send({"error":"An error occured"});
                            }
                        })
                    } else{
                        console.log("Wrong password");
                    }
                });
            } else{
                console.error(err);
                res.send({"error":"An error occured"});
            }
        })
    }
    login(user,test_res);
    router.post('/login',login);

    return router;
}