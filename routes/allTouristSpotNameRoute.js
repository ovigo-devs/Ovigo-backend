const express = require('express');
const router = express.Router();
const allTouristSpotNameControllers=require('../controllers/allTouristSpotNameControllers');

router.route('/').post(allTouristSpotNameControllers.postAllTouristSpot).get(allTouristSpotNameControllers.getAllTouristSpot)
router.route('/hotelAddPlace').post(allTouristSpotNameControllers.getAllTouristSpotForBusinessHotelAddPlaceName)
router.route('/hotelNearSpot').post(allTouristSpotNameControllers.getAllHotelNearSpotForBusinessHotelAdd)


module.exports=router;