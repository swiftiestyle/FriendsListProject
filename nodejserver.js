const express = require("express");     // ALWAYS USE CONST WHEN WE NEED TO USE PACKAGE 
                                        // SO THAT WE DONT USE THIS VARIABLE ANYWHERE ELSE
const app= express();
const path = require("path");         // path is a PACKAGE
const port= process.env.PORT || 5000;
const bodyparser = require("body-parser");
const connect= require("./mongodb.js") 
const viewDoc= require("./mongodb.js").viewDoc;

const mongodb= require("./mongodb.js").insertDoc; 
connect.connect();
app.use("/",express.static(path.join(__dirname,"public")));
app.use(bodyparser.json());  
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.text()); 
app.post("/gogaga/add.html",function(req,res){  
    res.send("HI!");
     console.log(req.body) 
   
    mongodb(req.body); 
})
app.get("/gogaga/list.html",function(req,res){   
 viewDoc(function(err, data){
    if (err) {
        console.log(err);
        return res(err);
    } else {
        
        return res.json(data);
    }
 })
})
app.listen(port,function(){console.log(`Listening at ${port}`);});