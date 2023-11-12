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
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
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