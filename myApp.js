const express = require('express');
const app = express();
let absPathHtml = __dirname + "/views/index.html";
let absPathPublic = __dirname + "/public";
// meet node console
console.log("Hello World");

// start a working on express server
/*app.get("/", (req, res) => res.send("Hello Express"))*/


//server an html file
app.get("/", (req, res) => res.sendFile(absPathHtml))

// server static assets
app.use("/public",express.static("public"))




























module.exports = app;
