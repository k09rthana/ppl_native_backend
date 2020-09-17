const db = require("../schema/postSchema");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
module.exports = {
  addPost: (data) => {
    return new Promise((resolve, reject) => {
      db.create(data, (err, data) => {
        if (data) {
          console.log("data entered");

          resolve(result);
          console.log(data);
        } else {
          ("data not entered");
          reject();
        }
      });
    });
  },
};
