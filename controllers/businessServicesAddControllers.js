const { postAllStaysService } = require("../services/allStaysServices");


exports.postAllBusinessServicesAdd = async (req, res, next) => {
    try {
        const data = req.body;
        if (data?.service_type == "stays") {
            const result = await postAllStaysService(data);
            if (result) {
                res.status(200).json({
                    status: 'Successfully',
                    data: result
                })
            } else {
                res.status(400).json({
                    status: 'Failled',
                    message: "Hotel Data Post Failed",
                    error: error.message
                })
            }
        }else {
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