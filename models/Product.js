const mongoose = require("mongoose");
const { type } = require("os");
const validator = require("validator");

const productSchema = mongoose.Schema(
  {
    model: {
      type: String,
      required: [true, "Please provide product model"],
      trim: true,
    },
    image: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide a valide image URL."],
    },
    status: {
      type: Boolean,
      default: true,
    },
    brand: {
      type: String,
    },
    keyFeature: [
      {
        type: String,
        required: [true, "Please provide key features."],
      },
    ],
    price: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
    },
    spec: [],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
