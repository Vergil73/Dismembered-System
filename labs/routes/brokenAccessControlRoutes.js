const Router = require('express');
const routes = Router();

// Attacker page controller
const { attacker } = require('../controllers/brokenController');
// const { victim } = require('../controllers/brokenController');


// Broken Access Controller Home Page
routes.get('/labs/broken-access-control', (req, res) => {
    res.render('labs/brokenAccessControl/brokenAccessControl');
});

// Lab 1
routes.get('/labs/broken-access-control/1', (req, res) => {
    res.render('labs/brokenAccessControl/1')
});

// Attacker
routes.get('/labs/broken-access-control/1/profile', attacker);

// Victim
// routes.get('/labs/broken-access-control/1/profile', victim);

module.exports = routes;