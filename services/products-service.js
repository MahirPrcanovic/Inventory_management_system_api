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
  const { name, picUrl, price, profitMargin, productionProcess } = req.body;
  const newProduct = new Product({
    name,
    picUrl,
    price,
    profitMargin,
    productionProcess,
  });
  try {
    await newProduct.save();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  return res.status(201).json({ newProduct });
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedItem = await Product.findByIdAndUpdate(
      req.params.id,
      req.params.body
    );
    if (!updatedItem)
      return res.status(400).json({ message: "Item does not exist." });
    return res.status(201).json({ updatedItem });
  } catch (err) {
    return res.status(400).json({ message: err.message });
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
