const router = require('express').Router();
const productController = require("../controller/productController");
const productService = require('../services/productServices');

router.post('/addProduct',  productService.single('image'), productController.addProduct);
router.post('/removeProduct', productController.deleteProduct);
router.get('/allProduct',productController.getAllProducts);
module.exports = router;