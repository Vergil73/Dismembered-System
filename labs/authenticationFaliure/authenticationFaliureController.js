const { Router } = require('express');
const routes =  Router();

// Authentication Faliure
routes.get('/labs/authentication-faliure', (req, res) => {
    res.render('labs/authenticationFaliure/authenticationFaliure');
});

module.exports = routes;