const express = require('express');
const router = express.Router();
const allSearchControllers=require('../controllers/allSearchControllers');

router.route('/').get(allSearchControllers.getSearchSuggetionsStays)
router.route('/destinationType').get(allSearchControllers.getAllDestinationTypeStays)
router.route('/spotName').get(allSearchControllers.getSpotNameSearchSuggetionsTouristSpot)


module.exports=router;