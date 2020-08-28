var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var blogSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    //isVerified: { type: Boolean, default: false },
    image: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("myCollection", blogSchema);
