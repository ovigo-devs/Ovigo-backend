const express = require('express');
const router = express.Router();
const businessServicesAddControllers=require('../controllers/businessServicesAddControllers');

router.route('/').post(businessServicesAddControllers.postAllBusinessServicesAdd)


module.exports=router;