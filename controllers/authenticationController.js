const { pool } = require('../data/dbConnection');
const bcrypt = require('bcrypt');

// Creating a New Account

function usernameValidator(username){
    const regexUser = /[-'/`~!#*$@%+=.,^&(){}[\]|;:”<>?\\]/;
    if(username.length === 0 || username.length > 55 || typeof username !== 'string'){
       return false;
    } else if(regexUser.test(username)){
        return false;
    } else{
        return true;
    }
}

function emailValidator(email){
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;    
    
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
   
    const email = req.body.email;
    if(!emailValidator(email))
        return res.status(400).send("Invalid Email");

    const plainPassword = req.body.password;
     if(!passwordValidator(plainPassword))
        return res.status(400).send("Invalid Password");

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    console.log(hashedPassword);

    // await pool.query("INSERT INTO users (username, email, password_hash)", []);
  
   } catch (err){
    console.log('Create Account Error: ', err);
   }

    
}


module.exports = { newAccount };