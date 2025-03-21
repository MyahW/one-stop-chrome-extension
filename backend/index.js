const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express(); 
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🎊OneStop Backend running...")
})

app.listen(port, () => {
  console.log(`💿 MLH Project Server is running on port: ${port}`);
})