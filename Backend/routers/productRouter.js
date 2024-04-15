const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const productController = require("../controller/productController");

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

router.post('/addProduct', productController.addProduct);
router.post("/upload", upload.single('product'), productController.uploadProductImage);
router.post('/removeProduct', productController.deleteProduct);
router.get('/allProduct',productController.getAllProducts);
module.exports = router;