const http = require('http');
const express=require('express');
const bodyParse=require('body-parser');
const bodyParser = require('body-parser');
// const routes = require('./routes');

// console.log(routes.someText);
const app=express();

app.use(bodyParser.urlencoded({extended:false}))
app.use('/product',(req,res,next)=>{
    console.log(' product middleware')
    res.send('<form action="/pro" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCT</button></form>')
});
app.use('/pro',(req,res)=>{
    console.log(req.body);
res.redirect('/');
});
app.use('/',(req,res,next)=>{
    console.log(' another middleware')
    res.send('<h1> hello from express </h1>')
});

//const server = http.createServer(app);

app.listen(3000);
