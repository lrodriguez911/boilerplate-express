require("dotenv").config();
let bodyParser = require("body-parser");
let express = require("express");
let app = express();
console.log("Hello World");
const mySecret = process.env.MESSAGE_STYLE;
let htmlPath = __dirname + "/views/index.html";
let htmlStyle = __dirname + "/public";
//app.get("/",(req, res) => res.send("Hello Express"))
app.use("/", bodyParser.urlencoded({extended: false}))
app.use("/", (req, res, next) =>{
  console.log(`${req.method} ${req.path} - ${req.ip}`)
next();
})

//using a method get to send html file using sendFile
app.get("/", (req, res) => res.sendFile(htmlPath));

//using a resourcer statitc whit express static and pass absolute path
app.use("/public", express.static(htmlStyle));

//add a page whit the time using two middleware concat
app.get("/now", (req, res, next) => {
req.time = new Date().toString();
next();
}, (req,res) => {
  res.send({time : req.time})
})

/* app.get("/json", (req, res) => {
  res.json({
    "message" : "Hello json"
  })
}) */

app.get("/json", (req, res) => {
  let response = mySecret === "uppercase" ? "HELLO JSON" : "Hello json";
  res.json({ "message": response });
});

//Get Route Parameter Input from the Client
app.get("/:word/echo", (req,res,next)=>{
let word = req.params.word
res.send({echo:word})
})
app.get("/name", (req, res, next) =>{
  let {first: firstname, last : lastname} = req.query;
  res.json({name : `${firstname} ${lastname}`})
  next();
})
//get data from POST request
app.post("/name", (req, res, next)=>{
  let {first : firstname, last :lastname} = req.body;
  res.json({name : `${firstname} ${lastname}`})
} )
//app.route("/name").get()
module.exports = app;
