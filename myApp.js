const express = require('express');
const app = express();
let absPathHtml = __dirname + "/views/index.html";
let absPathPublic = "/public";

//declare var to use env
const mySecret = process.env.MESSAGE_STYLE;

// meet node console
console.log("Hello World");

// start a working on express server
/*app.get("/", (req, res) => res.send("Hello Express"))*/


//Implement a Root-Level Request Logger Middleware
app.use((req, res, next) =>{
console.log(`${req.method} ${req.path} - ${req.ip}`)
next()
})

//server an html file
app.get("/", (req, res) => res.sendFile(absPathHtml))

// server static assets
app.use(absPathPublic,express.static("public"))

//Serve JSON on a Specific Route
/* app.get("/json" , (req, res) => res.json({"message": "Hello json"})) */

//use the .env file
app.get("/json", (req, res) => 
  {res.json(mySecret === "uppercase" ?  {
         message : "HELLO JSON"
       } : {message : "Hello json"})
  })


//Chain Middleware to Create a Time Server

























module.exports = app;
