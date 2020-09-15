const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = require("./user");
// const categorySchema = require("./categorySchema");
const timelineSchema = new Schema(
  {
    image: String,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: user },
    date: { type: Date, default: Date.now },
    title: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: categorySchema,
    },
    comments: [
      {
        comment: String,
        commentedBy: { type: mongoose.Schema.Types.ObjectId, ref: user },
      },
    ],
    like: { type: Array, default: [] },
  },
  { versionKey: false }
);
module.exports = mongoose.model("posts", timelineSchema);
