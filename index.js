const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

const productRoutes = require('./routes/products');

mongoose.connect(`mongodb+srv://danjaysut:${process.env.DB_PASS}@usersignup-ruhg9.mongodb.net/test?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// API accept headers put post patch get delete...
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');     // Allow access from anywhere
    res.header('*');

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET', {   // HTTP Methods we will accept
            useMongoClient: true
        });    
        return res.status(200).json({})     // response status to 200 and return as json data
    }
    next();
});

app.use('/products', productRoutes);