const express = require("express");
const { route } = require("../app");
const router = express.Router();
const productController = require("../controllers/product.controller");

router
  .route("/product")
  .get(productController.getProducts)
  .post(productController.addProduct);

router
  .route("/product/:id")
  .patch(productController.updateproduct)
  .delete(productController.deleteProduct);

module.exports = router;
