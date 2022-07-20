const express = require('express');
const app = express();
let absPathHtml = __dirname + "/views/index.html";
let absPathPublic = "/public";
// meet node console
console.log("Hello World");

// start a working on express server
/*app.get("/", (req, res) => res.send("Hello Express"))*/


//server an html file
app.get("/", (req, res) => res.sendFile(absPathHtml))

// server static assets
app.use(absPathPublic,express.static("public"))

//Serve JSON on a Specific Route
app.get("/json" , (req, res) => res.json({"message": "Hello json"}))



























module.exports = app;
