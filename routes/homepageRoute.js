const { Router } = require('express');
const routes = Router();

// Authentication middleware
// const { isUser } = require('../middleware/authenticationMiddleware');

routes.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = routes;