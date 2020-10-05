const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    email: String,
    comment: String,
    date: { type: Date, default: Date.now },
    image: String,
  },
  { versionKey: false }
);
module.exports = mongoose.model("comment", postSchema);
