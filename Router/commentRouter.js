var express = require("express");
var router = express.Router();
const api = require("../api/commentApi");

router.post("/comment", function (req, res) {
  console.log("comment", req.body);
  let email = req.body.email;
  let comment = req.body.comment;
  let passimagword = req.body.password;
  req.body["image"] = req.file.filename;

  api
    .addComment(email, comment, date, image)
    .then((result) => {
      if (result) {
        console.log("Add Comment");
        res.send("CommentAdded");
      } else {
        res.send("NotCommented");
        console.log("NotCommented");
      }
    })
    .catch(() => {
      console.log("Error in addComment");
    });

  console.log("Get call");
});
