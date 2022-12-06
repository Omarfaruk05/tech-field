const Product = require("../models/Product")

exports.addProductService = async (data) => {
    const result = await Product.create(data);
    return result;
}