const express = require('express');
const router = express.Router();
const businessUsersLogControllers=require('../controllers/businessUsersLogControllers');

router.route('/').post(businessUsersLogControllers.postBusinessLogUser)
// router.route('/forgotPassword').post(usersLogControllers.postForgotPasswordUser)
// router.route('/newPassword').post(usersLogControllers.postNewtPasswordUser)


module.exports=router;