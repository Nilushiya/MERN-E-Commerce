const ProductService = require('../services/productServices');
const mongoose = require('mongoose');
const { Types: { ObjectId } } = require('mongoose');
const ProductModel = require('../model/product');

exports.addProduct = async (req, res) => {
    try {
        const { name,imageUrl,category,new_price,old_price,available } = req.body;
        let image;
        if (req.file) {
            image = `/images/${req.file.filename}`;
        } else if (imageUrl) {
            image = imageUrl;
        } else {
            return res.status(400).json({ error: 'Please provide an image file or URL' });
        }

        const newProduct = new ProductModel({
            name,
            imageUrl,
            category,
            new_price,
            old_price,
            available
        });

        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllProducts = async(req,res) => {
    try {
        let products = await ProductModel.find({});
        console.log("All products fetched");
        res.json({ products });
    } catch (error) {
        console.error(error);
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




