const express = require('express');
const imageController = require('../controller/photo.controller');

const router = express.Router();

router.post('/', imageController.uploadImage);

module.exports = router;