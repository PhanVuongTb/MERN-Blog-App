const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const BlogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 4,
    },
    desc: {
      type: String,
      required: true,
      min: 12,
    },
    photo: {
      type: String,
      required: true,
    },
    categoryId: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
