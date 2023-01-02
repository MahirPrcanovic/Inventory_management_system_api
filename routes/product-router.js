// const productController = require("../controllers/products-controller");
// import { getAllProducts } from "../controllers/products-controller";
const productService = require("../services/products-service");
const express = require("express");
const router = express.Router();

router.get("/", productService.getAllProducts);
router.post("/", productService.createNewProduct);
router.patch("/:id", productService.updateProduct);
router.get("/:id", productService.getSingleProduct);
router.delete("/:id", productService.deleteProduct);

module.exports = router;
