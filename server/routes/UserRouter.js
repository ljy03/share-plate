const express = require('express');
const { CreateUser } = require('../controller/User');
const userRouter = express.Router();

userRouter.post('/create', CreateUser);

module.exports = userRouter;