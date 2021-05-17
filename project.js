const express= require("express");
const bodyParser= require("body_parser");


const app=express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});
var n1=req.body.num1;
var n2=req.body.num2;


app.post("/",function(req,res){
	res.send("Thanks for posting the form");
});
app.listen(3000,function(){
	console.log("Server has started on part 3000");
});
