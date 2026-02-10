const { Router } = require('express');
const routes = Router();

const { newAccount } = require('../controllers/authenticationController');
const { login } = require('../controllers/authenticationController');
const { logout } = require('../controllers/authenticationController');



// Create Account
routes.get('/newAccount',(req, res) => {
    res.render('createAccount');
});

// Post request for create account
routes.post('/newAccount', newAccount);

// Login 
routes.get('/login', (req, res) => {
    res.render('login');
});

// Post request for Login
routes.post('/login', login);

// Logout
routes.post('/logout', logout);

module.exports = routes;