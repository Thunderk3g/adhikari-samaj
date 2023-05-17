var express = require('express');
var controller = require('../controller/user.controller');
const verifySignUp = require('../middlewares/verifySignUp');
const verifySignIn = require('../middlewares/verifySignIn');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('user Works');
});

router.post('/signUp', [verifySignUp.checkDuplicateUsernameOrEmail], controller.signUp); //first goes to middleware and verifies, then to the controller

router.post('/signIn', [verifySignIn.checkUserAndPassword], controller.signIn);



module.exports = router;
