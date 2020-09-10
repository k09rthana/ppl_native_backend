var express = require("express");
const port = 8082;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const AuthRouter = require("./Router/authRouter");
// const TimelineRouter = require(".Router/timelineRouter");
// const Timeline = require("./Routers/timeline");
var app = express();

app.use(express.static("public"));
// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images/upload");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect(
  "mongodb://localhost:27017/ppl",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, result) => {
    if (result) console.log("connected to Database successfully");
    else {
      console.log(err);
    }
  }
);
// app.use("/", (req, res) => {
//   res.send("server working");
// });
app.use("/auth", AuthRouter);

// app.use("/timelineRouter", TimelineRouter);

app.listen(port, (err, data) => {
  console.log(`Server running -> 127.0.0.1:${port}`);
});
