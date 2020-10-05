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

router.get("/getPost", async (req, res) => {
  try {
    let sortBasedOn = req.param("sort");
    let sortingOrder = req.param("order");
    let desiredCategory = req.param("category");
    let limit = req.param("limit");
    let skip = req.param("skip");
    let data = await api.getAllPosts(
      limit,
      skip,
      desiredCategory,
      sortBasedOn,
      sortingOrder
    );

    res.send(data);
  } catch (err) {
    res.send();
  }
});

module.exports = router;
