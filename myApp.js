let express = require('express');
let app = express();
console.log("Hello World");
//let htmlPath = __dirame + "/views/index.html";
app.get("/", (req, res) => res.send("Hello Express"));
/* app.get("/", express.static("/public/styles.css")) */





































 module.exports = app;
