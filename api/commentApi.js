const db = require("../schema/commentSchema");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
module.exports = {
  addPost: (data) => {
    return new Promise((resolve, reject) => {
      np;
      db.create(data, (err, data) => {
        if (data) {
          console.log("comment data entered");

          resolve(data);
          console.log(data);
        } else {
          ("comment data not entered");
          reject();
        }
      });
    });
  },
};
