// const productController = require("../controllers/products-controller");
// import { getAllProducts } from "../controllers/products-controller";
const Product = require("../controllers/products-controller");
const express = require("express");
const router = express.Router();

router.get("/", Product.getAllProducts);
router.post("/", Product.addProducts);
router.patch("/:id", Product.updateProducts);
router.get("/:id", Product.getById);
router.delete("/:id", Product.deleteProduct);

module.exports = router;
