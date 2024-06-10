
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path"); 
const board = require("./ruter실습/board.js");
const user = require("./ruter실습/user.js");
const cart = require("./ruter실습/cart.js");


app.use("/board",board);
app.use("/user",user);
app.use("/cart",cart);


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");


    
    app.listen(3000, ()=>{
        console.log("서버 켰지롱~");
    })




// const board = [{id :1, name : "lee",}
//     ,{id :2, name : "lee2",}
//     ,{id :3, name : "lee3",},
//     {id :4, name : "lee4",}]
