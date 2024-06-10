const router =require("express").Router()
const fs = require("fs");
const path = require("path");


const title = "board 페이지당";
const title2 = "list이당";
const title3 = "wirte페이지당";
const board = [];


const boardList = [{id :1, name : "lee",}
    ,{id :2, name : "lee2",}
    ,{id :3, name : "lee3",},
    {id :4, name : "lee4",}]

router.get("/", (req,res)=>{
    res.render('실습', { board, title  });
})
router.get("/list", (req,res)=>{
    res.render('실습2', { board, title2  });
})
router.get("/wirte", (req,res)=>{
    res.render('실습3', { board, title3  });
})



module.exports = router;