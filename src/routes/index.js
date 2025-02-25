const express = require('express');

const router = express.Router();

const bookRouter = require("./bookRoutes");
const userRouter = require("./userRoutes");

router.use("/book",bookRouter)
router.use("/user",userRouter)

module.exports = router