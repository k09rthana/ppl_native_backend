var express = require("express");
var mongoose = require("mongoose");
var schema = require("./schema");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect(
  "mongodb://localhost:27017/datbasename",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, resp) => {
    if (err) {
      console.log("Mongoose err");
    } else {
      console.log("Connected to db");
    }
  }
);

console.log("server.js");
app.get("/", (req, resp) => {
  resp.send("server working");
});

app.post("/login", function (req, res) {
  console.log("app.post");
  schema.count(
    { $and: [{ email: req.body.email }, { password: req.body.password }] },
    function (err, docs) {
      if (docs === 1) {
        res.send("Logged in");
        res.redirect("timeline.js");
      } else {
        res.send("Incorrect");
      }
    }
  );
});

app.listen(8082, (err, data) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Server is running");
  }
});
