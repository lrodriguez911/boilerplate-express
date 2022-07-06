require("dotenv").config();
let express = require("express");
let app = express();
console.log("Hello World");
const mySecret = process.env.MESSAGE_STYLE;
let htmlPath = __dirname + "/views/index.html";
let htmlStyle = __dirname + "/public";
//app.get("/",(req, res) => res.send("Hello Express"))
app.use("/", (req, res, next) =>{
  console.log(`${req.method} ${req.path} - ${req.ip}`)
next();
})
app.get("/now", (req, res, next) => {
req.time = new Date().toString();
next();
}, (req,res) => {
  res.send({time : req.time})
})
app.get("/", (req, res) => res.sendFile(htmlPath));
app.use("/public", express.static(htmlStyle));
app.get("/json", (req, res) => {
  let response = mySecret === "uppercase" ? "HELLO JSON" : "Hello json";
  res.json({ "message": response });
});
//Get Route Parameter Input from the Client
app.get("/:word/echo", (req,res,next)=>{
let word = req.params.word
res.send({echo:word})
})
module.exports = app;
