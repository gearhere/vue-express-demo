// node back-end server
const http = require('http');
const badyParser = require('body-parser');
const express = require('express');
const userApi = require('./api/userApi');

let app = express();
let server = http.createServer(app);

app.use(badyParser.json());
app.use(badyParser.urlencoded({
    extended: true
}));

// back-end api routes
// see vue.config.js for /api
app.use('/api/user', userApi);

// start listening
server.listen(8888, () => {
    console.log(' success! port:8888')
})