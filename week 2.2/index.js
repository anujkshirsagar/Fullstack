const express =require("express");//import
const app=express()

const port=3000;

app.get("/",function(req,res){
    res.send("server is running");

})
app.listen(port);