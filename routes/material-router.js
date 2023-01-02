const express = require("express");
const router = express.Router();
const materialService = require("../services/material-service");
router.get("/", materialService.getAllMaterials);
router.post("/", materialService.createNewMaterial);
router.get("/:id", materialService.getSingleMaterial);
router.patch("/:id", materialService.updateMaterial);

module.exports = router;
