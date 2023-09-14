
const { postHotelBookingsService } = require('../services/hotelBookingsServices');

exports.PostHotelBookings = async (req, res, next) => {
    try {
        const data = req.body;
        const result= await postHotelBookingsService(data);
        if(result){
            res.status(200).json({
                status: 'Successfully',
                data: result
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