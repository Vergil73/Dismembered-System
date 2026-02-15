// Flag Submit 
const  { Router } = require('express');
const routes = Router();

const { submitFlag } = require('./submitFlagController');

routes.post('/submitFlag', submitFlag);

module.exports = routes