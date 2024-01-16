import dotenv from "dotenv";
import connectdb from "../db/index.js";
import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mongoose, { Mongoose } from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "../upload/images")));
app.get("/", (req, res) => {
  res.send("hi");
});

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../upload/images"),
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${process.env.PORT}/images/${req.file.filename}`,
  });
});

//Product schema

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    reqired: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});


//endpoints for products ----

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  }else{
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("Product saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.post("/removeproduct", async (req, res)=>{
  await Product.findOneAndDelete({id:req.body.id})
  console.log("Product Removed.")
  res.json({
    success: true,
    name: req.body.name
  })
})


//connection to db
connectdb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Cannot connect to Database. Error: ", err);
  });
