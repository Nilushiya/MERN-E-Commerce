const ProductModel = require('../model/product')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });

// exports.deleteProduct = async (productId) => {
//     try {
//         console.log("jjj");
//         return await ProductModel.findOneAndRemove({ _id: productId });
//     } catch (err) {
//         console.log("bbbb");

//         throw new Error('Failed to remove product');
//     }
// };


module.exports = upload;
