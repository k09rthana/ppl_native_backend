var express = require("express");
//var path = require("path");
var mongoose = require("mongoose");
var schema = require("./schema");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
app.use(cors());
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
// console.log("server.js");
// app.get("/", (req, resp) => {
//   resp.send("server working");
// });
// app.use("/auth",);
// app.post("/sign_up", function (req, res) {
//   console.log("app.post");
//   schema.find({ email: req.body.email }, function (err, docs) {
//     if (docs.length) {
//       res.send("User Exists");
//     } else {
//       schema.create(req.body, function (err, result) {
//         if (err) {
//           console.log("error");
//         } else {
//           console.log("result");
//         }
//       });

//       res.send("Successfully Registered");
//     }
//     console.log("Get call");
//     //console.log(req.body);
//   });
// });

app.listen(8082, (err, data) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Server is running");
  }
});
