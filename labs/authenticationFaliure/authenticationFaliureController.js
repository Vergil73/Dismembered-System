function lab1Post(req, res){
    try {
        const user = {
            username: 'admin',
            password: 'admin123'
        }

        const username = req.body.username;
        const password = req.body.password;

        if(user.username === username && user.password === password){
            res.render('labs/authenticationFaliure/admin');
        } else{
            res.send('Unsucessful');
        }



    } catch (error) {
        console.log('Error in Authentication Faliure Lab 1 post request: ', error);
        
    }
};

module.exports = { lab1Post };