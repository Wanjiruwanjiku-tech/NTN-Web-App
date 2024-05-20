// Server
//  import express, get the app func, get the expressLayouts

// check if we are running in the dev environment
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');


// set up the routes
const indexRouter = require('./routes/index');

// set up view engine - ejs
app.set('view engine', 'ejs');
// where the views are located. __dirname is the current directory
app.set('views', __dirname + '/views');
// set up the layouts
app.set('layout', 'layouts/layout');
// use the expressLayouts
app.use(expressLayouts);
// set the public folder
app.use(express.static('public'));

// import mongoose
const mongoose = require('mongoose');
// connect to the database
mongoose.connect(process.env.DATABASE_URL);
// check connection
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// use route
app.use('/', indexRouter);

// listen to a unknown port or default to the port 3000
app.listen(process.env.PORT || 3000);