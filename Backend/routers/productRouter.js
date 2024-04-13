const router = require('express').Router();
const productController = require("../controller/productController");
const productService = require('../services/productServices');

router.post('/addProduct',  productService.single('image'), productController.addProduct);
router.post('/removeProduct', productController.deleteProduct);
module.exports = router;