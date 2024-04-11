const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    id: { 
        type:Number,
        // required: true,
    },
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
        return next(); // If document is not new, don't generate an ID
    }

    try {
        const count = await this.constructor.countDocuments(); // Count existing documents
        this.id = count + 1; // Generate ID based on the count
        next();
    } catch (error) {
        next(error);
    }
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
