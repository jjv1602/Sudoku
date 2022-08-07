const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app. use (bodyParser. urlencoded( {extended : true}) ) 
app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html");
})
app.post("/",function(req,res){
    if(req.body=='easy'){

    }
    if(req.body=='medium'){

    }
    if(req.body=='hard'){

    }
})
app.listen(3000,function(){
    console.log("Server started on 3000");
})