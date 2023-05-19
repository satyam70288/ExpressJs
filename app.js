const http = require('http');
const express=require('express');
// const routes = require('./routes');

// console.log(routes.someText);
const app=express();
app.use((req,res,next)=>{
    console.log('middleware')
    next();
});
app.use((req,res,next)=>{
    console.log(' another middleware')
});

const server = http.createServer(app);

server.listen(3000);
