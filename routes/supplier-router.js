const express = require("express");
const router = express.Router();
const supplierService = require("../controllers/supplier-service");

router.get("/", supplierService.getAllSuppliers);
router.post("/", supplierService.createSupplier);
router.patch("/:id", supplierService.updateSupplier);
router.get("/:id", supplierService.getSingleSupplier);

module.exports = router;
