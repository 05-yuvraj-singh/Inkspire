const Book = require("../models/bookModel")

async function createBook(bookData){
    try{
        const newBook = new Book(bookData);
        await newBook.save();
        console.log("Book created");
        return newBook;
    }
    catch(err){
        console.log("Failed to create a book, error : ",err);
    }
}

module.exports = {createBook};
