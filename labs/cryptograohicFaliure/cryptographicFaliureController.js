// bac@123aw

// Lab 1
const md5 = require('md5');
const credential = require('./credential.json');

function authenticationFaliureLab1(req, res){
    try {
        const username = req.body.username;
        const password =  req.body.password;
        const passwordHash = md5(password);
        // console.log(hash);

        if(username === credential.username && passwordHash === credential.password){
            return res.render('labs/cryptographicFaliure/admin');
        } else{
            return res.send('Invalid Credentials');
        }

        
       

    } catch (error) {
        console.log('Error in Cryptographic Faliure lab 1 post method: ', error);
    }
}

module.exports = { authenticationFaliureLab1 };