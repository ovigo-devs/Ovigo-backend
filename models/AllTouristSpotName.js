const mongoose = require("mongoose");
const AllTouristSpotNameSchema = new mongoose.Schema({
    division: {
        type: String,
        required: [true, "Place Name must be required"]
    },
    district: {
        type: String,
        required: [true, "Location Name must be required"]
    },
    sub_district: {
        type: String,
        required: [true, "Place Name must be required"]
    },
    primary_place_name: {
        type: String,
        required: [true, "Primary Place Name must be required"]
    },
    spot_name: {
        type: String,
        required: [true, "Place Name must be required"]
    },
    activity: {
        type: String
    },
    remarkable_address: {
        type: String
    },
    known_as: {
        type: String
    },
    about: {
        type: String
    },
    image: {
        type: String
    }
})

const AllTouristSpotName = mongoose.model("touristspots", AllTouristSpotNameSchema);

module.exports = AllTouristSpotName;


