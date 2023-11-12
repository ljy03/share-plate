const express = require('express');
const FoodItem = require('../models/FoodItem');
const User = require('../models/user');

exports.AddFoodItem = async (req, res) => {
    const { name, quantity, expirtyDate, location, email, imageUri, type } = req.body;

    try {
        const newFoodItem = new FoodItem({
            name,
            quantity,
            expirtyDate,
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