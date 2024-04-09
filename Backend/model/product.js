const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
        id:{
            type: Number,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        image:{
            type:String,
            requied:true
        },
        category:{
            type:String,
            required:true,
    
        },
        new_price:{
            type:Number,
            required:true,
        },
        old_price:{
            type:Number,
            required:true,
        },
        date:{
            type:Date,
            default:Date.now,
        },
        available:{
            type:Boolean,
            default:true,
        },
    })

const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel;