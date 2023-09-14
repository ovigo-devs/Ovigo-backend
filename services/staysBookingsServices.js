const StaysBookings = require("../models/StaysBookings");




exports.postStaysBookingsService = async (data) => {
    const staysBooking = await StaysBookings.create(data);
    return staysBooking;
}