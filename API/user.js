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
            resolve(data);
            console.log(data);
          } else {
            reject();
          }
        }
      );
    });
  },

  userLogin: (email, password) => {
    return new Promise((resolve, reject) => {
      db.findOne({ email, password }, (err, result) => {
        if (result) {
          let { _id, username, firstName, lastName, email } = result;
          resolve({ _id, username, firstName, lastName, email });
        } else {
          reject();
        }
      });
    });
  },
};
