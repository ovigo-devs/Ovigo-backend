const express = require("express");
const router = express.Router();
const usersRegControllers = require("../controllers/usersRegControllers");

router.route('/').post(usersRegControllers.postRegUser).patch(usersRegControllers.updateUserInfo)
router.route('/verifyOTP').post(usersRegControllers.postRegUserAccountVerify)
router.route('/resendOTP').post(usersRegControllers.postRegUserResendCode)

module.exports = router;