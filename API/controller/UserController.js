const userSchema = require("../model/UserSchema");
const bcrypt = require("bcrypt");
const salt = 10;
const nodemailer = require("nodemailer");
const jsonwebtoken = require("jsonwebtoken");

const register = (req, res) => {
  userSchema.findOne({ email: req.body.email }).then((result) => {
    if (result == null) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        if (err) {
          return res.status(500).json(err);
        }
        const user = new userSchema({
          fullName: req.body.fullName,
          password: hash,
          email: req.body.email,
          activeState: req.body.activeState,
        });

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "avishka1999perera@gmail.com",
            pass: "hjba dzmz nhzz rjut",
          },
        });

        const mailOption = {
          from: "avishka1999perera@gmail.com",
          to: req.body.email,
          subject: "New Account Creation",
          text: "You have created your account !",
        };

        transporter.sendMail(mailOption, function (err, info) {
          if (err) {
            return res.status(500).json({ error: err });
          } else {
            // return res.status(200).json({'information':info.response});
            user
              .save()
              .then((saveResponse) => {
                return res.status(201).json({ message: "saved", saveResponse });
              })
              .catch((error) => {
                return res.status(500).json(error);
              });
          }
        });
      });
    } else {
      return res.status(409).json({ error: "email already exists" });
    }
  });
};

const login = (req, res) => {
    userSchema.findOne({'email': req.body.email}).then(selectedUser => {
        if(selectedUser !== null){
            bcrypt.compare(req.body.password, selectedUser.password, function(err, result) {
                if(err){
                    return res.status(500).json({'error' : "internal server error"})
                }

                if(result){
                    const payload = {
                        email : selectedUser.email
                    }
    
                    const secretKey = process.env.SECRET_KEY
    
                    const expiresIn = '24h';
    
                    const token = jsonwebtoken.sign(payload,secretKey,{expiresIn});
                    return res.status(200).json({'token': token},{message : "successfull Login"});
                }else{
                    return res.status(401).json({'message': 'incorrect password'});
                }
            });
        }else{
            return res.status(404).json({"error": "not found!"});
        }
    })
}

module.exports = { register , login };
