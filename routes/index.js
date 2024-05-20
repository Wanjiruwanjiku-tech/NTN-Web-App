// Set up all our routes for the app.
// This file is the entry point for all routes in the app.
// It is also the C for MVC

// Import express and get the router function.
const express = require('express');
const router = express.Router();

// create a route for home
router.get('/', (req, res) => {
    res.render('index');
});

// Export the router so it can be used in the app.
module.exports = router;