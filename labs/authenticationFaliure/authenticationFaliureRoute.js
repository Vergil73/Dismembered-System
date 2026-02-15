const { Router } = require('express');
const routes = Router();

// Lab 1
const { lab1Post } = require('./authenticationFaliureController');



// Authentication Home Page
routes.get('/labs/authentication-faliure', (req, res) => {
    res.render('labs/authenticationFaliure/authenticationFaliure');
});

// Lab 1
routes.get('/labs/authentication-faliure/1', (req, res) => {
    res.render('labs/authenticationFaliure/1')
})

// post for a default password lab 1
routes.post('/loginldefault', lab1Post);

module.exports = routes;