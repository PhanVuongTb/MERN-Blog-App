const categoryController = require("express").Router();
const Category = require("../models/Category");
const Blog = require("../models/Blog");

categoryController.get("/getAll", async (req, res) => {
  try {
    const category = await Category.find({});
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json(error);
  }
});

categoryController.get("/get/:id", async (req, res) => {
  try {
    const category = await Category.findOne({
      _id: request.params.id,
    }).exec();
    console.log(category);
    // const blog = await blog.find({ category }).exec();
    const blog = await blog.find({ category }).populate("category").exec();
    // const product = await Product.find({category}).select("-category").exec()
    response.json({ category, blog });
  } catch (error) {
    return res.status(500).json(error);
  }
});

categoryController.post("/", async (req, res) => {
  try {
    const category = await Category.create({ ...req.body });
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json(error);
  }
});

categoryController.put("/updateCategory/:id", async (req, res) => {
  try {
    const category = await Category.find()
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .exec();
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

categoryController.delete("/deleteCategory/:id", async (req, res) => {
  try {
    const category = await Category.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = categoryController;
