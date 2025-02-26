const express = require("express");
const {bookController} = require("../controller")

const bookRouter = express.Router();

bookRouter.use("/create",bookController.createController);

bookRouter.use("/update",bookController.updateController);

bookRouter.use("/delete",bookController.deleteController);

module.exports = bookRouter;