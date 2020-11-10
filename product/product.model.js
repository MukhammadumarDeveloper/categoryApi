const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        min: 3,
        max: 26,
        required: true
    },

    category: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('products', ProductSchema);