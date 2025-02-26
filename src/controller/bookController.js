function createController(req,res){
    console.log(req.body);
    res.send("BOOK CREATE CONROLLER REACHED.");
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