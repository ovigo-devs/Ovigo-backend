const express = require('express');
const router = express.Router();
const staysBookingsControllers=require('../controllers/staysBookingsControllers');

router.route('/').post(staysBookingsControllers.PostStaysBookings)


module.exports=router;