const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authController = require("./controllers/auth");
const blogController = require("./controllers/blog");
const categoryController = require("./controllers/category");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/auth", authController);
app.use("/blog", blogController);
app.use("/category", categoryController);

// multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.filename);
  },
});

const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("image"), async (req, res) => {
  return res.status(200).json({ msg: "Successfully uploaded" });
});

//connect db
mongoose
  .set("strictQuery", false)
  .connect(
    "mongodb+srv://Phan_Vuong:Anhnhoem2@cluster0.8znm798.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Kết nối db thành công"))
  .catch((error) => console.log(error));

// connect server
app.listen(process.env.PORT, () =>
  console.log("Server listening on port " + process.env.PORT)
);
