const http = require('http');
const express=require('express');
// const routes = require('./routes');

// console.log(routes.someText);
const app=express();
const server = http.createServer(app);

server.listen(3000);
