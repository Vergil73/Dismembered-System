const Router = require('express');
const routes = Router();

// authentication middleware
const { isUser } = require('../../middleware/authenticationMiddleware');
routes.get('/labs/personal-score', isUser, (req, res) => {
    res.render('labs/personalScore/personalScore');
})

module.exports = routes