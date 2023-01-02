// import Product from "../models/Product";
const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  let products;
  try {
    products = await Product.find();
    return res.status(200).json({ products });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.createNewProduct = async (req, res) => {
  const { name, picUrl, price, profitMargin } = req.body;
  const product1 = new Product({
    name,
    picUrl,
    price,
    profitMargin,
  });
  try {
    await product1.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ product1 });
};

exports.updateProduct = async (req, res) => {
  var product = await Product.findById(req.params.id);
  console.log(product);
  if (!product) res.status(400).json({ message: "Product not found." });
  if (req.body.name != null) {
    product.name = req.body.name;
  }
  if (req.body.picUrl != null) {
    product.picUrl = req.body.picUrl;
  }
  if (req.body.profitMargin != null) {
    product.profitMargin = req.body.profitMargin;
  }
  if (req.body.price != null) {
    product.price = req.body.price;
  }
  try {
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};

exports.getSingleProduct = async (req, res) => {
  const id = req.params.id;
  let product1;
  try {
    product1 = await Product.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!product1) {
    return res.status(404).json({ message: "No product found" });
  }
  return res.status(200).json({ product1 });
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;

  let product1;
  try {
    product1 = await Product.findByIdAndRemove(id);
  } catch (err) {
    return console.log(err);
  }
  if (!product1) {
    return res.status(500).json({ message: "Unable to delete" });
  }
  return res.status(200).json({ message: "Successfully delete" });
};
