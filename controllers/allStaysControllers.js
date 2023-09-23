
const { postAllStaysService, getAllStaysService, getOneStaysService, getAllSuggetionsStaysService } = require('../services/allStaysServices');

exports.postAllStays = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await postAllStaysService(data);
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

exports.getAllStays = async (req, res, next) => {
    try {
        const place_name = req.body.place_name;
        const data = await getAllStaysService(place_name);
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

exports.getOneStays = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await getOneStaysService(id);
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