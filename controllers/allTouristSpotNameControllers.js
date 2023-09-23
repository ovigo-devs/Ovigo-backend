const { postAllTouristSpotNameService, getAllTouristSpotNameService, gettAllTouristSpotNameBusinessHotelAddService, gettAllTouristPlaceNameBusinessHotelAddService } = require("../services/allTouristSpotNameService");


exports.postAllTouristSpot = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await postAllTouristSpotNameService(data);
        if (result) {
            res.status(200).json({
                status: 'Successfully',
                data: result
            })
        } else {
            res.status(400).json({
                status: 'Failled',
                message: "Data Post Failed",
                error: error.message
            })
        }


    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}

exports.getAllTouristSpot = async (req, res, next) => {
    try {

        const data = await getAllTouristSpotNameService();
        if (data) {
            res.status(200).json({
                status: 'Successfully',
                data: data
            })
        } else {
            res.status(400).json({
                status: 'Failled',
                message: "Data Get Failed",
                error: error.message
            })
        }


    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Get Failed",
            error: error.message
        })
    }
}

exports.getAllTouristSpotForBusinessHotelAddPlaceName = async (req, res, next) => {
    try {
        const {division, district, sub_district} = req.body;
        const data = await gettAllTouristPlaceNameBusinessHotelAddService(division, district, sub_district);
        if (data) {
            res.status(200).json({
                status: 'Successfully',
                data: data
            })
        } else {
            res.status(400).json({
                status: 'Failled',
                message: "Data Get Failed",
                error: error.message
            })
        }


    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Get Failed",
            error: error.message
        })
    }
}

exports.getAllHotelNearSpotForBusinessHotelAdd = async (req, res, next) => {
    try {
        const {place_name} = req.body;
        const data = await gettAllTouristSpotNameBusinessHotelAddService(place_name);
        if (data) {
            res.status(200).json({
                status: 'Successfully',
                data: data
            })
        } else {
            res.status(400).json({
                status: 'Failled',
                message: "Data Get Failed",
                error: error.message
            })
        }


    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Get Failed",
            error: error.message
        })
    }
}