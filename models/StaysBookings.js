
const mongoose = require("mongoose");

const staysBookingsSchema = new mongoose.Schema({
    owner_email: {
        required: true,
        type: String
    },
    user_email: {
        required: true,
        type: String
    },
    user_phone: {
        required: true,
        type: String
    },
    place_name: {
        required: true,
        type: String
    },
    place_location: {
        required: true,
        type: String
    },
    service_name: {
        required: true,
        type: String
    },
    service_type: {
        required: true,
        type: String
    },
    service_type_name: {
        type: String,
        required: [true, "Hotel Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [30, "Name is to large"],
    },
    service_type_place: {
        type: String,
        required: [true, "Hotel Place must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [30, "Name is to large"],
    },
    service_type_location: {
        type: String,
        required: [true, "Hotel Place must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [30, "Name is to large"],
    },
    service_type_image: {
        required: true,
        type: String
    },
    service_type_detailsId: {
        required: true,
        type: String
    },
    person: {
        required: true,
        type: Number
    },
    date_from: {
        required: true,
        type: String
    },
    date_to: {
        required: true,
        type: String
    },
    room_type: {
        required: true,
        type: String
    },
    room_name: {
        required: true,
        type: String
    },
    room_price: {
        required: true,
        type: Number
    },
    room_oldPrice: {
        required: false,
        type: Number
    }  
})

const StaysBookings = mongoose.model("staysbookings", staysBookingsSchema);

module.exports = StaysBookings;