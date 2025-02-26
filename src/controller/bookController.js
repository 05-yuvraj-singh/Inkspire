const {bookService} = require('../services');

async function createController(req,res){
    try{
      const data = await bookService.createBook(req.body);
      console.log("data is ",data);
      res.json({
        success:true,
        message: "Book Created successfully",
        data,
        err:null
      })
    }
    catch(err){
        console.log(err);
        res.json({
            success: false,
            message : "Something went wrong",
            data:null,
            err
        }
        )
    }
    
}

function updateController(req,res){
    console.log(req.query.bookId)
    res.send("BOOK UPDATE CONROLLER REACHED.");
}

function deleteController(req,res){
    console.log(req.query.bookId)
    res.send("BOOK DELETE CONROLLER REACHED.");
}

module.exports = {createController,updateController,deleteController}