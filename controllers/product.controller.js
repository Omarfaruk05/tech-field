const {
  addProductService,
  getProductsService,
} = require("../services/product.service");

exports.addProduct = async (req, res) => {
  try {
    const product = req.body;
    const result = await addProductService(product);

    res.status(200).json({
      inserted: true,
      _id: result._id,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data is not inserted.",
      error: error.message,
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await getProductsService();

    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data is not inserted.",
      error: error.message,
    });
  }
};
