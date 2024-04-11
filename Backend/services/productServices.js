// const ProductModel = require('../model/product')

// class ProductService{
//     static async addProductAdmin(name,image,category,new_price,old_price,available){
//         try{
//             const  addProductModule= new ProductModel({name,image,category,new_price,old_price,available});
//             return await addProductModule.save();
//         }
//         catch(err){
//             throw err;
//         }
//     }
// }

// module.exports = ProductService;
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;