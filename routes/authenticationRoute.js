const Router = require('express');
const routes = Router();

const { newAccount } = require('../controllers/authenticationController');

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


module.exports = routes;