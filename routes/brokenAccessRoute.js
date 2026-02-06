const Router = require('express');
const routes = Router();

routes.get('/BrokenAccessControl', (req, res) => {
    res.render('brokenAccess');
});

module.exports = routes;