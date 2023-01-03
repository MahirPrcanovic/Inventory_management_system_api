const Material = require("../models/Material");

exports.getAllMaterials = async (req, res) => {
  let materials;
  try {
    materials = await Material.find({}).select(
      "name quantity price isUsed supplier"
    );
    return res.status(200).json({ materials });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
exports.createNewMaterial = async (req, res) => {
  const {
    name,
    quantity,
    minQuantity,
    unitOfMeasure,
    isUsed,
    supplierId,
    price,
  } = req.body;
  const newMaterial = new Material({
    name,
    quantity,
    minQuantity,
    unitOfMeasure,
    isUsed,
    supplier: supplierId,
    price,
  });
  try {
    await newMaterial.save();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  return res.status(201).json({ newMaterial });
};

exports.getSingleMaterial = async (req, res) => {
  const id = req.params.id;
  let material;
  try {
    material = await Material.findById(id);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  if (!material) {
    return res.status(404).json({ message: "No material found" });
  }
  return res.status(200).json({ material });
};
exports.updateMaterial = async (req, res) => {
  const id = req.params.id;
  let updatedMaterial;
  try {
    updatedMaterial = await Material.findByIdAndUpdate(id, req.body, {
      new: true,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  if (!updatedMaterial) {
    return res.status(404).json({ message: "Material not found." });
  }
  return res.status(200).json({ updatedMaterial });
};
