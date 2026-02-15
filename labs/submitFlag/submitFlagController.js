// Submit the flag

const flags = [
    "49fb07e800324d29f25455d0aed1c566",
    "258b4b485e30e5b8f698af2f369d4d21",
    "1044793af6225e146ada906e9634ecb3"
];

function submitFlag(req, res){
    try {
        const userFlag = req.body.flag;

        if (flags.includes(userFlag)) {
            return res.send("Congratulations");
        }

        return res.send("NOT Congratulations");

    } catch(err) {
        console.log('Error while submitting flag: ', err);
        return res.status(500).send("Server Error");
    }
}



module.exports = { submitFlag };