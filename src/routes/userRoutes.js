const express = require("express");
const {userController} = require("../controller");

const userRouter = express.Router();

userRouter.use("/register",userController.registerController);
userRouter.use("/borrow",userController.borrowController);
userRouter.use("/return",userController.returnController);

module.exports = userRouter;