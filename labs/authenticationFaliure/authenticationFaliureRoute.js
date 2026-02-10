const { Router } = require('express');
const routes = Router();

// Authentication Home Page
routes.get('/labs/authentication-faliure', (req, res) => {
    res.render('labs/authenticationFaliure/authenticationFaliure');
});

// Lab 1
routes.get('/labs/authentication-faliure/1', (req, res) => {
    res.render('labs/authenticationFaliure/1')
})

module.exports = routes;