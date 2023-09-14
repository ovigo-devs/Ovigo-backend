const express = require('express');
const router = express.Router();
const allStaysControllers=require('../controllers/allStaysControllers');

router.route('/').post(allStaysControllers.postAllStays).get(allStaysControllers.getAllStays)
router.route('/:id').get(allStaysControllers.getOneStays)


module.exports=router;