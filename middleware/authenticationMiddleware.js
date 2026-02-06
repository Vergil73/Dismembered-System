async function isUser(req, res, next){
    try {

        if(req.session.logged){
            next();
        }
        else{
            // console.log("Not logged in as a user");
            // res.redirect('/login');
            res.render('login', {error: "You must be logged in as a user"});
        }
       
    } catch (error) {
        console.log('Is User error: ', error);
        next(error);
    }
}

module.exports = { isUser };