var express = require('express');
var router = express.Router();
var userRouter = require('./user.routes');
var memberRouter = require('./member.routes');
router.get('/', function (req, res) {
    res.send('Hello World');
});
router.use('/user', userRouter);
router.use('/member', memberRouter);
module.exports = router;