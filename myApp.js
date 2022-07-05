require("dotenv").config();
let express = require("express");
let app = express();
console.log("Hello World");
const mySecret = process.env.MESSAGE_STYLE;
let htmlPath = __dirname + "/views/index.html";
let htmlStyle = __dirname + "/public";
//app.get("/",(req, res) => res.send("Hello Express"))
app.get("/", (req, res) => res.sendFile(htmlPath));
app.use("/public", express.static(htmlStyle));
app.get("/json", (req, res) => {
  res.json(
    {"message": (mySecret === "uppercase" ? "HELLO JSON" : "Hello json")}
  );
});

module.exports = app;
