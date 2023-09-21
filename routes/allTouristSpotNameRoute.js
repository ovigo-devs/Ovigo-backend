const express = require('express');
const router = express.Router();
const allTouristSpotNameControllers=require('../controllers/allTouristSpotNameControllers');

router.route('/').post(allTouristSpotNameControllers.postAllTouristSpot).get(allTouristSpotNameControllers.getAllTouristSpot)
router.route('/hotelAddPlace').get(allTouristSpotNameControllers.getAllTouristSpotForBusinessHotelAddPlaceName)
router.route('/hotelNearSpot').get(allTouristSpotNameControllers.getAllHotelNearSpotForBusinessHotelAdd)


module.exports=router;