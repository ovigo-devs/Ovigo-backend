const HotelBookings = require("../models/HotelBookings");



exports.postHotelBookingsService = async (data) => {
    const allPlaces = await HotelBookings.create(data);
    return allPlaces;
}