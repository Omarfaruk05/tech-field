const Product = require("../models/Product");

exports.addProductService = async (data) => {
  const result = await Product.create(data);
  return result;
};
exports.getProductsService = async () => {
  const products = await Product.find({});
  return products;
};
