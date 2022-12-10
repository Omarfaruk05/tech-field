const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router
  .route("/product")
  .get(productController.getProducts)
  .post(productController.addProduct)
  .post(productController.updateproduct)
  .delete(productController.deleteProduct);

module.exports = router;
