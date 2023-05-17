const User = require('../models/user.model');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
require('dotenv').config();

exports.signUp = async function (req, res) {
    const user = await new User({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, 8),
    })
    user.save(err => {
        if (err) {
            res.status(500).send({ message: err });
        }
        res.send({ message: "User was registered successfully!" });
    });
}

exports.signIn = (req, res) => {
    var token = jwt.sign({ id: req.body.username }, process.env.secret, {
        expiresIn: 86400 //24hr
    })
    res.status(200).send({
        user: req.body.username, access_token: token
    });

}
