const { Schema, model } = require("mongoose");

const stocks = new Schema({
  stocks: [String],
});

module.exports = model("Stocks", stocks);
