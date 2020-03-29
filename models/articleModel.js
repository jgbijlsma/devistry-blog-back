const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    markdown: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = Article = mongoose.model("article", articleSchema);
