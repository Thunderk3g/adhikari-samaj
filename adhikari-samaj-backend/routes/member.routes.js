var express = require('express');
var controller = require('../controller/member.controller');
var router = express.Router();
router.post('/setItems', controller.getMember);

router.get('/getListItems', controller.addMember);

router.post('/deleteItem', controller.deleteMember);

module.exports = router;
