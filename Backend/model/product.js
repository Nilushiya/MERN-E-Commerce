const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

productSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); 
    }

    try {
        const count = await this.constructor.countDocuments();
        this.id = count + 1; 
        next();
    } catch (error) {
        next(error);
    }
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
