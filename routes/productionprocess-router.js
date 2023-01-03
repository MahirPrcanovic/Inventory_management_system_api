const express = require("express");
const router = express.Router();
const productionService = require("../services/productionprocess-service");

router.post("/", productionService.createNewProcess);

module.exports = router;
