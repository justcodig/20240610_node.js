const router =require("express").Router()
const fs = require("fs");
const path = require("path");



const title = "lkj 로그인페이지당";
const title2 = "signup이당";
const title3 = "info페이지당";
const user = [];

router.get("/", (req,res)=>{
    res.render('user', { user, title  });
})
router.get("/signup", (req,res)=>{
    res.render('user2', { user, title2  });
})
router.get("/info", (req,res)=>{
    res.render('user3', { user, title3  });
})



module.exports = router;