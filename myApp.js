let express = require('express');
let app = express();
console.log("Hello World")
let htmlPath = __dirname + "/views/index.html"
let htmlStyle = __dirname + "/public/index.html"
//app.get("/",(req, res) => res.send("Hello Express"))
app.get("/",(req, res) => res.sendFile(htmlPath))




































 module.exports = app;
