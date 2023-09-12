const express = require('express');
const router = express.Router();
const getDisoverExplorersControllers=require('../controllers/discoverExplorersControllers');


router.route('/').get(getDisoverExplorersControllers.getAllDiscoverExplorersName)
router.route('/:id').get(getDisoverExplorersControllers.getOneDiscoverExplorersName)


module.exports=router;