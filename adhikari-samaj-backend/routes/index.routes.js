var express = require('express');
var router = express.Router();
var userRouter = require('./user.routes');
var memberRouter = require('./member.routes');
var imageRouter = require('./photo.routes');

router.get('/', function (req, res) {
    res.send('Hello World');
});
router.use('/user', userRouter);
router.use('/member', memberRouter);
router.use('/images', imageRouter);


module.exports = router;