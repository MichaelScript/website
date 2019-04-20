const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '200mb'}));

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const routes = {
    "auth": require(path.join(__dirname, "/app/auth"))(app)
}

// app.use('/auth/',routes['auth']);
// console.log("Hello world");