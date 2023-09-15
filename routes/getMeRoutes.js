const express = require('express');
const router = express.Router();
const getMeControllers=require('../controllers/getMeControllers');


router.route('/').get(getMeControllers.getMeUser)
router.route('/:email').get(getMeControllers.getUserInformation)


module.exports=router;