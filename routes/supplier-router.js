const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplier-controller");

router.get("/", supplierController.getAllSuppliers);
router.post("/", supplierController.createSupplier);
router.patch("/:id", supplierController.updateSupplier);
router.get("/:id", supplierController.getSingleSupplier);

module.exports = router;
