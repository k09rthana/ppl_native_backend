var express = require("express");
var router = express.Router();
const api = require("../api/postApi");
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/post/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.send("Server FOR POSTS Working fine");
});
router.post("/create", upload.single("image"), async (req, res) => {
  try {
    console.log("try of create");

    console.log(req.file.filename);
    req.body["image"] = req.file.filename;
    let data = await api.addPost(req.body);
    res.send(data);
  } catch (err) {
    console.log("error in postRouter", err);
    res.send("Error");
  }
});

module.exports = router;
