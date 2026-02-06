require('dotenv').config()

const express = require('express');
const app = express();

// Set up template and views folder
app.set('view engine', 'ejs');
app.set('views', './views');


// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Set up for static files
app.use(express.static('public'));

// Homepage
const homepage = require('./routes/homepageRoute');
app.use('/', homepage);

// Create Account
const createAcoount = require('./routes/authenticationRoute');
app.use('/', createAcoount);




// Error handling
// page not found
app.use((req, res, next) => {
    res.render('error');
})

// Errors
app.use((req, res, next, err) => {
    console.log("Errors in the server", err);
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server Is Running On The Port ${process.env.SERVER_PORT}`);
});