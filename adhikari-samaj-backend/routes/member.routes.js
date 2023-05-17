var express = require('express');
var controller = require('../controller/member.controller');
var router = express.Router();
router.post('/getMember', controller.getMember);

router.get('/addMember', controller.addMember);

router.post('/deleteMember', controller.deleteMember);

module.exports = router;
