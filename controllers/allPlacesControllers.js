
const { getAllPlacesService, getOnePlacesService, postAllPlacesService } = require('../services/allPlacesServices');

exports.postAllPlaces = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        const result= await postAllPlacesService(data);
        // console.log(result);
        if(result){
            res.status(200).json({
                status: 'Successfully',
                data: result
            })
        }else{
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

exports.getAllPlaces = async (req, res, next) => {
    try {

        const data= await getAllPlacesService();
        console.log(data);
        if(data){
            res.status(200).json({
                status: 'Successfully',
                data: data
            })
        }else{
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
        const data= await getOnePlacesService(id);
        if(data){
            res.status(200).json({
                status: 'Successfully',
                data: data
            })
        }else{
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