const { postAllTouristSpotNameService, getAllTouristSpotNameService } = require("../services/allTouristSpotNameService");


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


        // const { field1="Chattagram", field2="Coxsbazar", field3="Moheshkhali", field4="Swimming" } = req.query;

        // const conditions = {};

        // if (field1) {
        //     conditions.division = { $regex: field1, $options: 'i' };;
        // }

        // if (field2) {
        //     conditions.district = { $regex: field2, $options: 'i' };;
        // }

        // if (field3) {
        //     conditions.sub_district = { $regex: field3, $options: 'i' };;
        // }

        // if (field4) {
        //     conditions.activity = { $regex: field4, $options: 'i' };;
        // }

        // // কুয়েরি তৈরি
        // const query = conditions;
        // // console.log(query);

        // // MongoDB কুয়েরি চালানো
        // const data = await getAllTouristSpotNameService(query);
        // console.log(data);



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