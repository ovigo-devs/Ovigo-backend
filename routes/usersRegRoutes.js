const express = require("express");
const router = express.Router();
const usersRegControllers = require("../controllers/usersRegControllers");

router.route('/').post(usersRegControllers.postRegUser)
router.route('/verifyOTP').post(usersRegControllers.postRegUserAccountVerify)
router.route('/verifyOTP/resendOTP').post(usersRegControllers.postRegUserResendCode)

module.exports = router;