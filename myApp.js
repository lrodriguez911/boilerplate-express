const express = require('express');
const app = express();
let absPathHtml = __dirname + "/views/index.html";
let absPathPublic = "/public";

//Use body-parser to Parse POST Requests
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))
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
app.get("/now", 
  ((req, res, next) => {
  req.time = new Date().toString();
  next();
}), ((req, res) => res.send({time : req.time}))
)


//Get Route Parameter Input from the Client
app.get("/:word/echo", (req, res) => {
  let {word} = req.params;
  res.json({echo: word})
})

//Get Query Parameter Input from the Client
app.route("/name").get((req, res) => {
  let {first: firstname, last : lastname} = req.query;
  res.json({name : `${firstname} ${lastname}`})
})




















module.exports = app;
