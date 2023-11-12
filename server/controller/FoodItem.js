const express = require('express');
const FoodItem = require('../models/FoodItem');
const User = require('../models/user');

exports.AddFoodItem = async (req, res) => {
    const { name, quantity, expiry, location, email, imageUri, type } = req.body;
    console.log(expiry);

    try {
        const newFoodItem = new FoodItem({
            name,
            quantity,
            expiry,
            location,
            type,
            imageUri,
            userEmail: email
        })
        await newFoodItem.save();

        res.status(201).json(newFoodItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
