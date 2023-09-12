const express = require('express');
const router = express.Router();
const usersLogControllers=require('../controllers/userLogControllers');

router.route('/').post(usersLogControllers.postLogUser)
router.route('/forgotPassword').post(usersLogControllers.postForgotPasswordUser)
router.route('/forgotPassword/newPassword').post(usersLogControllers.postNewtPasswordUser)


module.exports=router;