// Submit the flag
function submitFlag(req, res){
    try{
        const flag = req.body.flag;
        if(flag === 'FLAG-12345'){
            res.send('Right Flag');
        } else{
            res.send('Flag Incorrect');
        }
        
        // res.redirect('/');

    } catch(err){
        console.log('Error while submitting flag: ', err);
    }
}


module.exports = { submitFlag };