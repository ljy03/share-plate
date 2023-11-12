const express = require('express');
const { CreateUser, updateUserInventory, getUserInventory, getUserInventoryFoodItemAboutToExpire } = require('../controller/User');
const { AddFoodItem } = require('../controller/FoodItem');
const userRouter = express.Router();

userRouter.post('/create', CreateUser);
userRouter.post('/addFood', AddFoodItem)
userRouter.put('/updateInventory', updateUserInventory);
userRouter.get('/getInventory', getUserInventory)
userRouter.get('/getInventoryFoodItemAboutToExpire', getUserInventoryFoodItemAboutToExpire);

module.exports = userRouter;