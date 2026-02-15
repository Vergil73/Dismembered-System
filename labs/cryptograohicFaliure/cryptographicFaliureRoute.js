const { Router } = require('express');
const routes =  Router();
const path = require('path');


// Cryptographic Faliure HomePage
routes.get('/labs/cryptographic-faliure', (req, res) => {
    res.render('labs/cryptographicFaliure/cryptographicFaliure');
});

// lab 1
routes.get('/labs/cryptographic-faliure/1', (req, res) => {
    res.render('labs/cryptographicFaliure/1');
});

// lab 1 json credentials
routes.get('/labs/cryptographic-faliure/1/credentials', (req, res) => {
    // routes.get('/sd', (req, res) => {
    const credentials = path.join(__dirname, 'credential.json');
    res.header("Content-Type", "application/json");
    res.sendFile(credentials);
});

// lab 1 post
const { authenticationFaliureLab1 } = require('./cryptographicFaliureController');
routes.post('/authenticationFaliureLab1', authenticationFaliureLab1);

module.exports = routes;