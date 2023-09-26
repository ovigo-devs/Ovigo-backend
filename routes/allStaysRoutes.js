const express = require('express');
const router = express.Router();
const allStaysControllers=require('../controllers/allStaysControllers');

router.route('/').post(allStaysControllers.postAllStays)
router.route('/allStayShow').get(allStaysControllers.getAllStaysShow)
router.route('/placeDetailAllStay').get(allStaysControllers.getPlaceDetailsPageAllStays)
router.route('/singleHotel/:id').get(allStaysControllers.getOneStays)
router.route('/:place_name').get(allStaysControllers.getAllServiceTypeStay)


module.exports=router;