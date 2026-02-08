const Router = require('express');
const routes = Router();


// Authentication middleware
const { isUser } = require('../../middleware/authenticationMiddleware');

routes.get('/labs/personal-score',isUser, (req, res) => {
    res.render('labs/pesrsonalScore');
});

module.exports = routes;