const express = require('express');
const { CreateUser, updateUserInventory, getUserInventory, getUserInventoryFoodItemAboutToExpire, updateFoodItemType, getAllPublicFoodItem } = require('../controller/User');
const { AddFoodItem } = require('../controller/FoodItem');
const userRouter = express.Router();

userRouter.post('/create', CreateUser);
userRouter.post('/addFood', AddFoodItem)
userRouter.put('/updateInventory', updateUserInventory);
userRouter.get('/getInventory', getUserInventory)
userRouter.get('/getInventoryFoodItemAboutToExpire', getUserInventoryFoodItemAboutToExpire);
userRouter.put('/updateFoodItemofInventory', updateFoodItemType);
userRouter.get('/getPublicInventory', getAllPublicFoodItem);

module.exports = userRouter;