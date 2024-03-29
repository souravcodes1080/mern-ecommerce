import dotenv from "dotenv";
import connectdb from "./db/index.js";
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
app.use("/images", express.static(path.join(__dirname, "./upload/images")));
app.get("/", (req, res) => {
  res.json("hi");
});



//----------------------------------
app.get("/test", (req, res) => {
  res.json("hiii");
});
//-----------------------------------



const storage = multer.diskStorage({
  destination: path.join(__dirname, "./upload/images"),
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
    image_url: `https://shopsy-api.onrender.com/images/${req.file.filename}`,
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

//user schema

const Users = mongoose.model("Users", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//endpoints for user --------

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, errors: "Existing users found." });
  }
  let cart = {};

  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  if (user.password.length < 6) {
    return res
      .status(400)
      .json({ success: false, errors: "Create a strong Password." });
  }

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json({ success: false, errors: "User not found." });
  }
  const passCompare = req.body.password === user.password;

  if (passCompare) {
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, "secret_ecom");
    res.json({ success: true, token });
  }

  if (!passCompare) {
    return res.status(400).json({ success: false, errors: "Wrond password." });
  }
});

//endpoints for products ----

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
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

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Product Removed.");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products fetched.");
  res.send(products);
});

//endpoints for new collections

app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newCollection = products.slice(1).slice(-8);
  res.send(newCollection);
});

//endpoints for popular

app.get("/popular", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popular = products.slice(0, 4);
  res.send(popular);
});

//middleware to fetch user

const fetchUser = async (req, res, next) => {
  const token = req.header("authToken");
  if (!token) {
    res.status(401).send({ errors: "Please authenticate using valid token." });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ errors: "Please authenticate using valid token." });
    }
  }
};

//creating endpoint for adding product in cart

app.post("/addtocart", fetchUser, async (req, res) => {
  let userdata = await Users.findOne({ _id: req.user.id });
  userdata.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userdata.cartData }
  );
  res.send({message: "Product added to cart."});
});

//creating endpoint to remove product from cart

app.post("/removefromcart", fetchUser, async (req, res) => {
  let userdata = await Users.findOne({ _id: req.user.id });
  if( userdata.cartData[req.body.itemId] > 0){
    userdata.cartData[req.body.itemId] -= 1;
  }
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userdata.cartData }
  );
  res.send({message: "Product removed to cart."});
});

//endpoint to get cart items

app.post("/getcart", fetchUser, async (req, res)=>{
  let userdata = await Users.findOne({ _id: req.user.id });
  res.json(userdata.cartData)
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
