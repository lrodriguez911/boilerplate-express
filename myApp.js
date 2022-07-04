let express = require('express');
let app = express();
console.log("Hello World");
let htmlPath = __dirname + "/views/index.html";
let htmlStyle = __dirname + "/public";
/* app.get("/", (req, res) => res.send("Hello Express")); */
app.get("/", (req, res)=>res.sendFile(htmlPath))
app.use("/public",express.static(htmlStyle))




































 module.exports = app;
