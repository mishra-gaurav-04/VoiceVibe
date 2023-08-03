const experss = require('express');
const router = experss.Router();
const authController = require('../controllers/authController');


router.post('/signup',authController.signup);
router.post('/login',authController.login);

module.exports = router;