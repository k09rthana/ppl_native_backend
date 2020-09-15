let db = require("../schema/user");
// module.exports={
//     isUserExist=(value)=>{
//         return new Promise((resolve,reject)=>{
//             if(value===10)
//             resolve(10);
//             else
//             reject("User Already Exists");

//         })
//     }

module.exports = {
  isUserExists: (email) => {
    return new Promise((resolve, reject) => {
      db.find({ email: email }, (err, result) => {
        if (result) {
          if (result.length === 0) {
            console.log("empty result");
            resolve(false);
          } else {
            console.log("User is not found");
            resolve(true);
          }
        } else {
          console.log(err);
        }
      });
    });
  },

  registerUser: (username, password, email, firstName, lastName) => {
    return new Promise((resolve, reject) => {
      db.create(
        { username, password, email, firstName, lastName },
        (err, data) => {
          if (data) {
            console.log("data entered");
            let { username, password, email, firstName, lastName } = result;

            resolve(result);
            console.log(data);
          } else {
            ("data not entered");
            reject();
          }
        }
      );
    });
  },

  userLogin: (email, password) => {
    console.log("api userLogin");
    return new Promise((resolve, reject) => {
      db.findOne({ email, password }, (err, result) => {
        if (result != 0) {
          console.log("if of findOne");
          let { _id, username, firstName, lastName, email } = result;
          //send("Loggedin");

          resolve(result);
        } else {
          console.log("else of findOne");

          reject();
        }
      });
    });
  },
};
