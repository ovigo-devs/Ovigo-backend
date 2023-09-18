const express = require("express");
const router = express.Router();
const BusinessUsersRegControllers = require("../controllers/businessUsersRegControllers");

router.route('/').post(BusinessUsersRegControllers.postBusinessRegUser).patch(BusinessUsersRegControllers.updateBusinessUserInfo)
router.route('/verifyOTP').post(BusinessUsersRegControllers.postBusinessRegUserAccountVerify)
router.route('/resendOTP').post(BusinessUsersRegControllers.postRegUserResendCode)

module.exports = router;