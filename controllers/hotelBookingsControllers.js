const { postHotelBookingsServices } = require("../services/hotelBookingsServices");



exports.postHotelBookings = async (req, res, next) => {
    try {
        const data = req.body;
        const result= await postHotelBookingsServices(data);
        if(result){
            res.status(200).json({
                message: 'Successfully Added',
                data: result
            })
        }else{
            res.status(400).json({
                status: 'Failled',
                message: "Hotel Booking Failed",
                error: error.message
            })
        }
        

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Hotel Booking Failed",
            error: error.message
        })
    }
}