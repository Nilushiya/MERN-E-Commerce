const router = require('express').Router();
const productController = require("../controller/productController");

router.post('/addProduct',productController.addProduct);

module.exports = router;