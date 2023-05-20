const express=require('express');
const router=express.Router();


router.get('/product',(req,res,next)=>{
    console.log(' product middleware')
    res.send('<form action="/pro" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCT</button></form>')
});
router.post('/pro',(req,res)=>{
    console.log(req.body);
res.redirect('/');
});

module.exports =router;