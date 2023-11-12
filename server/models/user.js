const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    photo: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);
module.exports = User;