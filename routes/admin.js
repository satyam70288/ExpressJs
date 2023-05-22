const path=require('path');
const express=require('express');
const router=express.Router();
const rootdir=require('../util/path');

router.get('/product',(req,res,next)=>{
    console.log(' product middleware')
    res.sendFile(path.join(rootdir,'../','views','product.html'));
});
router.post('/pro',(req,res)=>{
    console.log(req.body);
res.redirect('/');
});

module.exports =router;