const express = require('express');
const { CreateUser, updateUserInventory } = require('../controller/User');
const { AddFoodItem } = require('../controller/FoodItem');
const userRouter = express.Router();

userRouter.post('/create', CreateUser);
userRouter.post('/addFood', AddFoodItem)
userRouter.put('/updateInventory', updateUserInventory);

module.exports = userRouter;