const express = require('express');
const dotenv = require('dotenv');


const routes = require('./routes')

dotenv.config();

const app = express();
const port = process.env.PORT || 4040


app.use('/api',routes);

app.listen(port,()=>{
    console.log(`SERVER RUNNING FINE on port ${port}`);
})