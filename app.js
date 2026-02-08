require('dotenv').config()

const express = require('express');
const app = express();

// Express-Session
const session = require('express-session');

app.use(session ({
    secret: process.env.express_secret_key,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000*60*60*24
    }
}));

// Set up template and views folder
app.set('view engine', 'ejs');
app.set('views', './views');

// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Set up for static files
app.use(express.static('public'));

// Global variablr for ejs files
app.use((req, res, next) => {
  res.locals.logged = req.session.logged;
  next();
});

// Homepage
const homepage = require('./routes/homepageRoute');
app.use('/', homepage);

// Create Account
const createAcoount = require('./routes/authenticationRoute');
app.use('/', createAcoount);


// LABS

// Personal Score
const personalScore =  require('./labs/routes/personalScoreRoute');
app.use('/', personalScore);

// Broken Access Control
const brokenAccessControl = require('./labs/routes/brokenAccessControlRoutes');
app.use('/', brokenAccessControl)


// Error handling
// page not found
app.use((req, res, next) => {
    res.render('error');
    // next(err);
})

// Errors
app.use((err, req, res, next) => {
    console.error("Errors in the server", err);
    res.status(500).render('error');
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server Is Running On The Port ${process.env.SERVER_PORT}`);
});