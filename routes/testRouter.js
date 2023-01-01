const express = require("express");
const router = express.Router();
const Role = require("../models/Role");
const Employee = require("../models/Employee");
const Material = require("../models/Material");
const Product = require("../models/Product");
const ProductionProcess = require("../models/ProductionProcess");
const Supplier = require("../models/Supplier");
const Imte = require("../models/ProductionProcessItem");
const User = require("../models/User");

router.post("/", async (req, res) => {
  const subscriber = new Role({
    role: req.body.role,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
