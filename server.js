require("dotenv").config();
const productRouter = require("./routes/product-router");
const supplierRouter = require("./routes/supplier-router");
const express = require("express");
const testRouter = require("./routes/testRouter");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
app.use(express.json());
app.use("/products", productRouter);
app.use("/suppliers", supplierRouter);
app.listen(3000, () => console.log("Server started"));
