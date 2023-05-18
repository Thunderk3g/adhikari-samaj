const express = require('express');
const router = express.Router();
const imageController = require('../controller/photo.controller');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('image'), imageController.uploadImage);
router.get('/image', imageController.getImage);

module.exports = router;