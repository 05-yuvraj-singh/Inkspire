const express = require('express');

const router = express.Router();

router.use('/user/test',(req,res)=>{
    res.send("TEST REQUEST REACHED CONTROLLER.")
})

module.exports = router