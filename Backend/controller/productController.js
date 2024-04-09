const ProductService = require('../services/productServices');

exports.addProduct = async(req,res,next) => {
    try{
        const {email,password} = req.body;
        const successRes = await ProductService.addProductAdmin(email,password);
        res.json({status:true,success:"Admin product add Successfully"})
    }
    catch(err){

    }
}