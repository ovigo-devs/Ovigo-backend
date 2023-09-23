
const { getAllPlacesService, getOnePlacesService, postAllPlacesService, findAPlacesService } = require('../services/allPlacesServices');

exports.postAllPlaces = async (req, res, next) => {
    try {
        const data = req.body;
        const findData = await findAPlacesService(data?.place_name);
        if (findData) {
            const result = await postAllPlacesService(data);
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
        } else {
            res.status(400).json({
                status: 'Failled',
                message: "This Place Submit Before",
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

exports.getAllPlaces = async (req, res, next) => {
    try {

        const data = await getAllPlacesService();
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

exports.getOnePlaces = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await getOnePlacesService(id);
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