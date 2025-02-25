const express = require("express");

const bookRouter = express.Router();

bookRouter.use("/test",(req,res)=>{
    res.send("BOOK TEST REQUEST WORKS FINE");
})

module.exports = bookRouter;