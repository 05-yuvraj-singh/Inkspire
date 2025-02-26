const mongoose = require("mongoose");
const mongoURI = process.env.MONGOURI;



const connectDB = ()=>{
    try{
        console.log("CONNECTING TO DB ... ")
        mongoose.connect(mongoURI , {}).then(()=>console.log("MONGODB CONNECTED"))
        .catch(err => console.log(err))   
    }
    catch(err){
        console.log("CONNECTION TO MONGO FAILED , ERROR : ",err);
    }
}

module.exports = connectDB;
