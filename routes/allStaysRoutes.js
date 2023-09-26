const express = require('express');
const router = express.Router();
const allStaysControllers=require('../controllers/allStaysControllers');

router.route('/').post(allStaysControllers.postAllStays).get(allStaysControllers.getAllStays)
router.route('/allStayShow').get(allStaysControllers.getAllStaysShow)
router.route('/placeDetailAllStay').get(allStaysControllers.getPlaceDetailsPageAllStays)
router.route('/:id').get(allStaysControllers.getOneStays)


module.exports=router;