const express = require('express');
const router = express.Router();
const getMeControllers=require('../controllers/getMeControllers');


router.route('/').get(getMeControllers.getMeUser)


module.exports=router;