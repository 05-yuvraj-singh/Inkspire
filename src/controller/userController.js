function registerController (req,res){
    res.send("USER REGISTERED SUCCESSFULLY")
}


function borrowController(req,res){
    res.send(`BOOK with book id ${req.query.bookId} borrowed by user with userid ${req.query.userId}`)
}


function returnController (req,res){
    res.send(`BOOK with book id ${req.query.bookId} returned by user with userid ${req.query.userId}`)
}

module.exports = {registerController,borrowController,returnController}