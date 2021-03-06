let express = require('express');
let app = express();
let bodyParser = require('body-parser');
console.log("Hello World");
let htmlPath = __dirname + "/views/index.html";
let htmlStyle = __dirname + "/public";
/* app.get("/", (req, res) => res.send("Hello Express")); */
app.use("/", bodyParser.urlencoded({ extended: false }))
//app.post("/")
app.use("/", (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
})

app.get("/", (req, res) => res.sendFile(htmlPath))

app.use("/public", express.static(htmlStyle))

/* app.get("/json", (req, res) => {
  res.json({
    "message" : "Hello json"
  })
}) */
app.get("/json", (req, res) => {
  let response =
    process.env.MESSAGE_STYLE === "uppercase" ?
      "HELLO JSON" : "Hello json"
  res.json({ "message": response})
})
//Chain Middleware to Create a Time Server
//chain a middlwware to show time in url /now
app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({ time: req.time })
})
//Get Route Parameter Input from the Client
app.get("/:word/echo", (req, res, next) => {
  let word = req.params.word;
  res.send({ echo: word })
})
app.get("/name", (req, res, next) => {
  let { first: firstname, last: lastname } = req.query;
  res.json({ name: `${firstname} ${lastname}` })
})
// Get data from POST request
app.post("/name", (req, res, next) => {
  //let { first: firstname, last: lastname } = req.body;
  res.json({name: `${req.body.first} ${req.body.last}`})
})


































module.exports = app;
