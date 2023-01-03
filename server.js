require("dotenv").config();
const productRouter = require("./routes/product-router");
const supplierRouter = require("./routes/supplier-router");
const materialRouter = require("./routes/material-router");
const productionItem = require("./routes/productionprocessitem-router");
const processRouter = require("./routes/productionprocess-router");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
app.use(express.json());
app.use("/products", productRouter);
app.use("/suppliers", supplierRouter);
app.use("/materials", materialRouter);
app.use("/processItem", productionItem);
app.use("/process", processRouter);
app.listen(3000, () => console.log("Server started"));
