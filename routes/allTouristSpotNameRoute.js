const express = require('express');
const router = express.Router();
const allTouristSpotNameControllers=require('../controllers/allTouristSpotNameControllers');

router.route('/').post(allTouristSpotNameControllers.postAllTouristSpot).get(allTouristSpotNameControllers.getAllTouristSpot)


module.exports=router;