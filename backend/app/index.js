const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
console.log('hello world');
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '200mb'}));
var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'mysql',
  user     : 'user',
  password : 'password',
  database : 'db'
});

db.connect();
/* Creating all the tables we need */
let usersTable = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)  ENGINE=INNODB;`

let makeQuery = function(err,results,fields){
    if(err){
        console.log("Error: ", err);
    } else{
        console.log("Results: ", results);
        console.log("Fields: ",fields);
    }
}

db.query(usersTable,makeQuery)

// db.query("SHOW tables",makeQuery);

// connection.end();



const routes = {
    "auth": require(path.join(__dirname, "auth"))(app,db)
}

app.use('/auth/',routes['auth']);