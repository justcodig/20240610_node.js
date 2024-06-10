const router =require("express").Router()
const fs = require("fs");
const path = require("path");



const title = "cart 페이지요다";
const title2 = "add 페이지에여요요요요";
const cart = [];

router.get("/", (req,res)=>{
    res.render('cart', { cart, title  });
})
router.get("/add", (req,res)=>{
    res.render('cart2', { cart, title2  });
})




module.exports = router;