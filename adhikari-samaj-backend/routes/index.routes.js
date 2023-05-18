var express = require('express');
var router = express.Router();
var userRouter = require('./user.routes');
var memberRouter = require('./member.routes');
const imageRoutes = require('./photo.routes');
const upload = multer({ dest: 'uploads/' }); // Set the destination folder for uploaded files
router.get('/', function (req, res) {
    res.send('Hello World');
});
router.use('/user', userRouter);
router.use('/member', memberRouter);
router.use('/images', upload.single('image'), imageRoutes);

module.exports = router;