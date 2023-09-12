const HotelBookings = require("../models/HotelBookings");


exports.postHotelBookingsServices = async (data) => {
    const postHotelBookings = await HotelBookings.create(data);
    return postHotelBookings;
}