const express =require('express');
const bodyparser =require('body-parser')
const app=express();

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static("static"));
app.set("view engine","ejs");

app.get("/",function(req,res,next){
	res.send("Hi, this is my first node server")
});

app.get("/first",function(req,res,next){
	//res.send("First change bro")
	if(req.query.baapka=="lund")
		{res.send("Hai na");
		return;}

});

app.get("/second",function(req,res,next){
	res.send("second")
});

app.post("/query",function(req,res,next){
	//res.send(Math.random() + " " + JSON.stringify(req.body))
	if(! req.body.username){
		res.send("Empty username");
		return;
	}
	if(! req.body.password){
		res.send("Empty password");
		return;
	}
	res.send("Your username is  : "+req.body.username+"  Your Password is :  "+req.body.password);


});

app.get("/random",function(req,res,next){
	res.send(""+Math.floor(Math.random()*100000));
});

app.get("/third",function(req,res,next){

	if(req.query.q=="node")res.render("test1",{title:"Node Js", topic:"Node EJS template engine",status:1, fruits:["A","B","C"]});
	else if(req.query.q=="python")res.render("test1",{title:"Python",topic:"Indtroduction to python",status:2 ,fruits:["P","Q","R"]});
});

app.listen(3022);
