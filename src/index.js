const express = require('express');
const dotenv = require('dotenv');

dotenv.config();


const routes = require('./routes')
const connectDB = require('../src/utils/databaseConnection');


const app = express();
const port = process.env.PORT || 4040

connectDB();

app.use('/api',routes);

app.listen(port,()=>{
    console.log(`SERVER RUNNING FINE on port ${port}`);
})