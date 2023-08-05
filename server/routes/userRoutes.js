const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/signup',authController.signup);
router.post('/loginEmail',authController.loginByEmail);
// TODO implement .loginPhone
// router.post('/loginPhone',authController.loginByPhone);


module.exports = router;