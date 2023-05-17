const User = require('../models/user.model');
var bcrypt = require('bcryptjs');

checkUserAndPassword = (req, res, next) => {

    User.findOne({
        username:req.body.username
    }).exec((err,user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if(!user){
            res.status(404).send({ message: 'User Not Found' });
            return;
        }
        var isPasswordValid = bcrypt.compareSync(req.body.password,user.password);
        if(!isPasswordValid){
            return res.status(401).send({message:'Password Incorrect'});
        }
        
        next();
        
    })

  
  };

  const verifySignIn = {

    checkUserAndPassword
  
  };
  
  
  module.exports = verifySignIn;