const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);
module.exports = FoodItem;