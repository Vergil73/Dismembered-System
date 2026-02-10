// Lab 1
function attacker(req, res) {
    const users = {
        attacker: { role: 'attacker' },
        victim: { role: 'victim', secret: 'FLAG-12345' }
    };

    const id = req.query.id;
    const user = users[id];


    if (!user) {
        return res.status(404).send('User not found');
    }

    res.render(`labs/brokenAccessControl/${user.role}`, { user });
}


// // Submit the flag
// function submitFlag(req, res){
//     try{
//         const flag = req.body.flag;
//         if(flag === 'FLAG-12345'){
//             res.send('Right Flag');
//         } else{
//             res.send('Flag Incorrect');
//         }
        
//         // res.redirect('/');

//     } catch(err){
//         console.log('Error while submitting flag: ', err);
//     }
// }


module.exports = { attacker };