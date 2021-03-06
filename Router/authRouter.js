var express = require("express");
const router = express.Router();
const api = require("../api/user");
// router.get("/", (req, res) => {
//   res.send("auth router working");
// });
router.post("/sign_up", function (req, res) {
  console.log("signup", req.body);
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  api
    .isUserExists(email)
    .then((result) => {
      if (result) {
        console.log("User Exists");
        res.send("Exists");
      } else {
        console.log({ username, password, email, firstName, lastName });

        api
          .registerUser(username, password, email, firstName, lastName)
          .then((result) => {
            if (result) {
              console.log("Registered");
              res.send("Registered");
            } else {
              res.send("Not registered");
              console.log("Not Registered");
            }
          })
          .catch(() => {
            console.log("Error in registerUser");
          });
      }
    })
    .catch(() => {
      console.log("Error in isUserExists");
    });

  console.log("Get call");
});

router.post("/login", function (req, res) {
  console.log("@@@@@login call", req.body);
  let email = req.body.email;
  // let username = req.body.username;
  let password = req.body.password;
  // let firstName = req.body.firstName;
  // let lastName = req.body.lastName;

  api
    .userLogin(email, password)
    .then((result) => {
      if (result) {
        console.log("logged in", result);

        res.send("Loggedin");
      } else {
        res.send("Error");
        console.log("result error");
      }
    })
    .catch((err) => {
      res.send("Wrong Id");
      console.log("No value received", err);
    });
});

// route.post("/upload", upload.single("image"), (req, res) => {
//   if (req.file)
//     res.json({
//       imageUrl: `images/uploads/${req.file.filename}`,
//     });
//   else res.status("409").json("No Files to Upload.");
// });

module.exports = router;
