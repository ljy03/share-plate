const mongoose = require('mongoose');
const express = require('express');
const User = require('../models/user');
const FoodItem = require('../models/FoodItem');


exports.CreateUser = async (req, res) => {
    const { email, name, photo } = req.body;
    try {
        const newUser = new User({
            email,
            name,
            photo
        })
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        if (error.code === 11000 && error.keyPattern.email) {
            // This is a duplicate key error for the 'email' field
            res.status(409).json({ error: "Duplicate email" }); // Respond with a 409 Conflict status
        } else {
            // Handle other types of errors
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

exports.updateUserInventory = async(req, res) => {
    const {email} = req.body;
    try {
        const foodItems = await FoodItem.find({userEmail: email});
        const updateUserInventory = await User.findOneAndUpdate({email: email}, {inventory: foodItems});
        res.status(200).json(updateUserInventory);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}