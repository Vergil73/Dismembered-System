const { pool } = require('../data/dbConnection');
const bcrypt = require('bcrypt');

// Creating a New Account

function usernameValidator(username){
    const regexUser = /[-'/`~!#*$@%+=.,^&(){}[\]|;:”<>?\\]/; //Checks for any special characters
    if(username.length === 0 || username.length > 55 || typeof username !== 'string'){
       return false;
    } else if(regexUser.test(username)){
        return false;
    } else{
        return true;
    }
}

function emailValidator(email){
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;  //Gives correct email format  
    
    if(email.length === 0 || typeof email !== 'string'){
        return false;
    } else if(!regexEmail.test(email)){
        return false;
    } else {
        return true;
    }
}

function passwordValidator(password){
    const regex = /[^A-Za-z0-9]/;
    const num = /[0-9]/; 
    return typeof password === 'string' && password.length >= 8 && regex.test(password) && num.test(password) ;
}

async function newAccount(req, res){
   try{
    const username = req.body.username;
    if(!usernameValidator(username))
        return res.status(400).send("Invalid Username");
        // return res.render('createAccount', {error: 'Invalid Username'});

   
    const email = req.body.email;
    if(!emailValidator(email))
        return res.status(400).send("Invalid Email");
        // return res.render('createAccount', {error: 'Invalid Email'});


    const plainPassword = req.body.password;
     if(!passwordValidator(plainPassword))
        return res.status(400).send("Invalid Password");
        // return res.render('createAccount', {error: 'Invalid Password'});

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);

    await pool.query("INSERT INTO users (username, email, password_hash) values($1, $2, $3)", [username, email, hashedPassword]);

    res.redirect('/login'); //After creating account redirects to the login page

   } catch (err){
    console.log('Create Account Error: ', err);
   }
    
}
 
// Login

// checks for valid username and email
function credentialValidator(credential){
    const regexUser = /[-'/`~!#*$@%+=.,^&(){}[\]|;:”<>?\\]/;
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

   if(typeof(credential) !== 'string' || credential.length === 0 || credential.length > 55){
    return false;
   } else if( regexEmail.test(credential)){
    return true;
   } else if( regexUser.test(credential)){
    return false;
   } else{
    return true;
   }
}

async function login(req, res){

    try{
        const credential = req.body.username;

        if(!credentialValidator(credential))
            return res.status(400).send("Invalid Username or Password");

        const plainPassword = req.body.password;
        if(typeof (plainPassword) !== 'string')
            return res.status(400).send("Invalid Password");

        const { rows } = await pool.query ("SELECT id, username, email, password_hash FROM users WHERE username=$1 OR email=$2", [credential, credential]);

        if (rows.length === 0) { return res.status(401).send("Invalid credentials"); } //Checks if the rows is empty or not

        // Database credentials info
        const dbCredential = rows[0].username || rows[0].email;
        const password_hash = rows[0].password_hash;
        const dbId = rows[0].id;

        const resultPassword =  await bcrypt.compare(plainPassword, password_hash);

        // Check username, email and password with the database
        if(dbCredential === credential   && resultPassword){
            // console.log('congratulations You are logged in as a user');

            // stores session for a single user
            req.session.logged = true;
            req.session.userId = dbId;

            // console.log(req.session);
            // console.log(req.session.userId);

            res.redirect('/');
        } else{
            res.status(401).send('Invalid Credentials');
        }
    } catch(err){
        console.log("Login Error: ", err)
    }

}



function logout(req, res){
    req.session.destroy(() => {
		res.clearCookie("logged");
		res.redirect("/login");
	});
}

module.exports = { newAccount, login, logout };