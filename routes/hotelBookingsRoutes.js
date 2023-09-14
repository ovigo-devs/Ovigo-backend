const express = require('express');
const router = express.Router();
const hotelBookingsControllers=require('../controllers/hotelBookingsControllers');

router.route('/').post(hotelBookingsControllers.PostHotelBookings)


module.exports=router;