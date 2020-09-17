const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = require("./user");
const postSchema = new Schema(
  {
    title: String,
    category: String,
    email: String,
    date: { type: Date, default: Date.now },
    image: String,
  },
  { versionKey: false }
);
module.exports = mongoose.model("posts", postSchema);
