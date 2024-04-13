const product = require('../model/product')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });

exports.delete = async (productId) => {
    try {
        return await product.findOneAndRemove({ id: productId });
    } catch (err) {
        throw new Error('Failed to remove product');
    }
};


module.exports = upload;
