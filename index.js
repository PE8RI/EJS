const express=require("express");
const path=require("path");
const app=express();
const port=8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.get("/",(req,res)=>{
  res.render("home.ejs");
})

app.get("/home",(req,res)=>{
  res.send("hi, This is my page");
})

app.get("/ig/:username",(req,res)=>{
  let {username}=req.params;
  const instaData=require("./data.json");
  const data=instaData[username];
  if(data){
  res.render("instagram.ejs",{data});
  }
  else{
    res.render("error.ejs");
  }
})

app.get("/rolldice",(req,res)=>{
  let dice=Math.floor(Math.random()*10)+10;
  res.render("rolldice.ejs",{dice});
})
app.listen(port,()=>{
  console.log(`listenng to port no ${port}`);
})
