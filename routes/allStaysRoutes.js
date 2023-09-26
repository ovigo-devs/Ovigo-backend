const express = require('express');
const router = express.Router();
const allStaysControllers=require('../controllers/allStaysControllers');

router.route('/').post(allStaysControllers.postAllStays)
router.route('/allStayShow').get(allStaysControllers.getAllStaysShow)
router.route('/placeDetailAllStay').get(allStaysControllers.getPlaceDetailsPageAllStays)
router.route('/:place_name').get(allStaysControllers.getAllStays)
router.route('/:id').get(allStaysControllers.getOneStays)


module.exports=router;