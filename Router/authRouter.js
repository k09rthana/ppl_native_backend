var express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("auth router working");
});
router.post("/sign_up", function (req, res) {
  console.log("signup");
  //api.f1(10).then(()).catch(());
  schema.find({ email: req.body.email }, function (err, docs) {
    if (docs.length) {
      res.send("User Exists");
    } else {
      schema.create(req.body, function (err, result) {
        if (err) {
          console.log("error");
        } else {
          console.log("result");
        }
      });

      res.send("Successfully Registered");
    }
    console.log("Get call");
    //console.log(req.body);
  });
});

router.post("/login", function (req, res) {
  console.log("app.post");
  user.count(
    { $and: [{ email: req.body.email }, { password: req.body.password }] },
    function (err, docs) {
      if (docs === 1) {
        res.send("Loggedin");
      } else {
        res.send("Incorrect Username or Password");
      }
    }
  );
});

// route.post("/upload", upload.single("image"), (req, res) => {
//   if (req.file)
//     res.json({
//       imageUrl: `images/uploads/${req.file.filename}`,
//     });
//   else res.status("409").json("No Files to Upload.");
// });

module.exports = router;
