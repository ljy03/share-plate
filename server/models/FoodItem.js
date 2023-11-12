const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        trim: true,
    },
    expiry: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
        trim: true,
    },
    imageUri: {
        type: String,
        trim: true,
    },
    userEmail: {
        type: String,
        required: true,
    }
})

const FoodItem = mongoose.model('FoodItem', foodItemSchema);
module.exports = FoodItem;