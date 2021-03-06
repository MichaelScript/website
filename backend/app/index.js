const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
console.log('hello world');
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '200mb'}));
const fs = require('fs');
const jwt = require('jsonwebtoken');
/* JWT options */
const PUBLIC_KEY  = fs.readFileSync(path.resolve(__dirname, 'keys/jwtRS256.key.pub'), 'utf8');
const verifyOptions = {
    expiresIn:  "30d",
    algorithm:  ["RS256"]
};

var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'mysql',
  user     : 'user',
  password : 'password',
  database : 'db'
});
let launch;
launch = function(){
    db.connect(function(err){
        if(!err){
            console.log("Connected to MYSQL");
            /* Helper function for creating tables */
            let makeQuery = function(err,results,fields){
                if(err){
                    console.log("Error: ", err);
                } else{
                    console.log("Results: ", results);
                    console.log("Fields: ",fields);
                }
            }
            /* Creating all the tables we need */
            let usersTable = `CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                PRIMARY KEY (id)
            )  ENGINE=INNODB;`

            let tokensTable = `CREATE TABLE IF NOT EXISTS tokens (
                id INT AUTO_INCREMENT,
                user_id INT NOT NULL,
                token VARCHAR(1000),
                PRIMARY KEY (id)
                )`
            let blogPostsTable = `CREATE TABLE IF NOT EXISTS posts(
                id INT AUTO_INCREMENT,
                user_id INT NOT NULL,
                content LONGTEXT,
                title VARCHAR(1000),
                creation_time DATETIME DEFAULT CURRENT_TIMESTAMP,
                modification_time DATETIME ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (id)
            )`

            db.query(usersTable,makeQuery);
            db.query(tokensTable,makeQuery);
            db.query(blogPostsTable,makeQuery);
            // db.query("SHOW tables",makeQuery);

            // connection.end();

            // let debug = function(req,res,next){
            //     console.log("Req is: ", req);
            //     next()
            // }
            // app.use(debug)

            const routes = {
                "auth": require(path.join(__dirname, "./public/auth"))(app,db),
                "data": require(path.join(__dirname, "./public/data"))(app,db),
                "blog": require(path.join(__dirname, "./private/blog"))(app,db),
            }
            let sanitizer = function(req,res,next){
                /* Custom input sanitization */
                next()
            }
            app.use(sanitizer);
            app.use("/data/",routes["data"]);
            app.use('/auth/',routes['auth']);
            /* Middleware to check for user token */
            let verifyToken = function(req,res,next){
                /* Get jwt token from headers and decode it */
                let auth = req.headers.authorization;
                console.log("Authorization Header: ", auth);
                if(auth){
                    jwt.verify(auth,PUBLIC_KEY,function(err,decoded){
                        if(!err){
                            console.log("Decoded:", decoded);
                            req.auth = decoded;
                            next()
                        } else{
                            console.log("Error decoding token:", err);
                            res.status(401)
                            res.send({"Error":"Unauthorized"})
                        }
                    })
                } else{
                    console.log("Unauthorized");
                    res.status(401);
                    res.send({"Error":"Unauthorized"})
                }
            }
            app.use(verifyToken);
            app.use('/blog/',routes['blog']);
        } else{
            /* Try to connect again after 5 seconds */
            setTimeout(launch,5000);
        }
    });
}

launch();