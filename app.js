//jshint esversion
const express= require("express");
//const bodyParser = require("body-parser");
const ejs= require("ejs");

const app = express();
const expressLayouts= require("express-ejs-layouts");

app.set("view engine","ejs"); //set ejs as view engine 
app.set("views", __dirname + "/views"); //different views files going to go for our server
app.set("layout","layouts/layout");  //every single file put inside the layout file so that we don't have to duplicate all the header & footer html

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home");
}); //user go to homepage

app.listen(3000,function(){
 console.log("Server is running on port 3000 ");
});