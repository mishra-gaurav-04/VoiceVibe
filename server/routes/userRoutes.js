const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.post('/signup',authController.signup);
router.post('/loginEmail',authController.loginByEmail);
router.post('/verify',authController.verifyOtpEmail);
router.get('/users/:id',userController.getUserById);
// TODO implement .loginPhone
// router.post('/loginPhone',authController.loginByPhone);


module.exports = router;