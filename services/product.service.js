const Product = require("../models/Product");

exports.addProductService = async (data) => {
  const result = await Product.create(data);
  return result;
};
exports.getProductsService = async () => {
  const products = await Product.find({});
  return products;
};
exports.deleteProductsService = async (id) => {
  const result = await Product.deleteOne(id);
  return result;
};
exports.updateProductsService = async (id, data) => {
  const result = await Product.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
