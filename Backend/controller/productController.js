const mongoose = require('mongoose');
const { Types: { ObjectId } } = require('mongoose');
const ProductModel = require('../model/product');


exports.uploadProductImage = (req, res) => {
    try {
        res.json({
            success: 1,
            image_url: `http://localhost:4000/images/${req.file.filename}`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.addProduct = async (req, res) => {
    try {
        const { name,imageUrl,category,new_price,old_price,available } = req.body;

        const newProduct = new ProductModel({
            name,
            imageUrl,
            category,
            new_price,
            old_price,
            available
        });

        const savedProduct = await newProduct.save();
        res.json({success:true,
            savedProduct});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllProducts = async(req,res) => {
    try {
        let products = await ProductModel.find({});
        console.log("All products fetched");
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.updateProducts = async(req,res) => {
    try {
        const productId = req.params.productId;
        const updateData = req.body;
       
        const updatedProduct = await ProductModel.findByIdAndUpdate(productId, updateData, { new: true });
        console.log(updatedProduct);
        res.json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.updateProductImg = async(req,res) => {
    try {
        const productId = req.params.productId;
        console.log(productId);
        const updateImg = req.body;
        console.log(req.body);
        const updatedProduct = await ProductModel.findByIdAndUpdate(productId, updateImg, { new: true });
        console.log(updatedProduct);
        res.json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.body._id;
        console.log(req.body._id);
        
     
        const product = await ProductModel.findById(new ObjectId(productId));

        console.log(product); 
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const result = await product.deleteOne();
        console.log(result); 
        return res.json({ status: true, success: "Product Delete Successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.newCollections = async(req,res) => {
    let products = await ProductModel.find({});
    let newCollection = products.slice(1).slice(-8);
    console.log("All products fetched");
    res.json(newCollection);
}

exports.popularWomens = async(req,res) =>{
    let products = await ProductModel.find({category:"women"});
    let popularInWomen = products.slice(0,4);
    console.log("Popular in Women fetched");
    res.json(popularInWomen);
}




