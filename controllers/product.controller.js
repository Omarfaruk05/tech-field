const {
  addProductService,
  getProductsService,
  deleteProductsService,
  updateProductsService,
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
exports.deleteProduct = async (req, res) => {
  try {
    const result = await deleteProductsService(req.params);

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data is not deleted.",
      error: error.message,
    });
  }
};
exports.updateproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await updateProductsService(id, req.body);

    res.status(200).json({
      status: "Success",
      message: "Successfully updated the product.",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Successfully doesn't upadat the product.",
      error: error.message,
    });
  }
};
