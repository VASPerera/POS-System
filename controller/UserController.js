const userSchema = require ("../model/UserSchema");
const bcrypt = require ("bcrypt");
const salt = 10;

const register = (req, res) => {
    bcrypt.hash(req.body.password, salt, function(err, hash){
        if(err){
            return res.status(500).json(err);
        }
        const user = new userSchema({
            fullName : req.body.fullName,
            password : hash,
            email : req.body.email,
            activeState : req.body.activeState
        });
        user.save().then(saveResponse => {
            return res.status(201).json({"message": "saved"});
        }).catch(error => {
            return res.status(500).json(error);
        });
    });
}

module.exports = {register};