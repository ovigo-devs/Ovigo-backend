const mongoose = require("mongoose");
const allStaysSchema = new mongoose.Schema({
    place_name: {
        type: String,
        required: [true, "Place Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    location_name: {
        type: String,
        required: [true, "Location Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    service: {
        type: String,
        required: [true, "Stays Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    service_type: {
        type: String,
        required: [true, "Stays Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    name: {
        type: String,
        required: [true, "Stays Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    location: {
        type: String,
        required: [true, "Stays Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    image: [
        {
            image: String,
        },
    ],
    ratting: {
        type: String
    },
    price: {
        type: Number
    },
    old_price: {
        type: Number
    },
    about: {
        type: String
    },
    pacilities: {
        type: String
    },
    about_location: {
        type: String
    },
    review: {
        type: String
    },
    partner: {
        type: String
    },
    special_partner: {
        type: String
    }
})

const AllStays = mongoose.model("allstays", allStaysSchema);

module.exports = AllStays;

