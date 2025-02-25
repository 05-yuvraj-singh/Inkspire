const express = require('express');

const app = express();


app.get('/',(req,res)=>res.send("HEY THERE."))

app.listen(4040,()=>{
    console.log("SERVER RUNNING FINE");
})