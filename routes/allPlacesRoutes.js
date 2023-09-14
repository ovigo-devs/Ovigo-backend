const express = require('express');
const router = express.Router();
const allPlacesControllers=require('../controllers/allPlacesControllers');

router.route('/').post(allPlacesControllers.postAllPlaces).get(allPlacesControllers.getAllPlaces)
router.route('/:id').get(allPlacesControllers.getOnePlaces)


module.exports=router;