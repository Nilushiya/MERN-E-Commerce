const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Users', userSchema)