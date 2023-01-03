const ProductionProcess = require("../models/ProductionProcess");
const ProductionItem = require("../models/ProductionProcessItem");
const Material = require("../models/Material");
exports.createNewProcess = async (req, res) => {
  const { name, items } = req.body;
  const newProcess = new ProductionProcess({
    name,
    productionProcessItems: items,
    startDate: Date.now(),
  });
  try {
    const createdItem = await (
      await newProcess.save()
    ).populate({
      path: "productionProcessItems",
      populate: { path: "material" },
    });
    let price = 0;
    createdItem.productionProcessItems.map(
      (item) => (price += item.quantity * item.material.price)
    );
    createdItem.price = price;
    await createdItem.save();
    return res.status(200).json({ createdItem });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
