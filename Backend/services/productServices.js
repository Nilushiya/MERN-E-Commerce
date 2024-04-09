const ProductModel = require('../model/product')

class ProductService{
    static async addProductAdmin(email,password){
        try{
            const  addProductModule= new ProductModel({email,password});
            return await addProductModule.save();
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = ProductService;