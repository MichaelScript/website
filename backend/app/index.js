const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
console.log('hello world');
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '200mb'}));

const { Client } = require('pg')
const client = new Client()

client.connect().then(function(){
    console.log('hello world');
});
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()
// app.post('/hello',function(req,res){
//     console.log("hello");
// })
// const routes = {
//     "auth": require(path.join(__dirname, "auth"))(app)
// }


// app.use('/auth/',routes['auth']);
// console.log("Hello world");