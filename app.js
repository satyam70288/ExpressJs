const path=require('path');
const http = require('http');
const express=require('express');
const bodyParse=require('body-parser');
const bodyParser = require('body-parser');
// const routes = require('./routes');

// console.log(routes.someText);
const app=express();
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
app.use(bodyParser.urlencoded({extended:false}))


app.use(adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

//const server = http.createServer(app);

app.listen(3000);
