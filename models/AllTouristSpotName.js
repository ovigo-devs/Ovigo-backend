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
    spot_name: {
        type: String,
        required: [true, "Place Name must be required"]
    },
    activity: {
        type: String,
        required: [true, "Location Name must be required"]
    },
    remarkable_address: {
        type: String,
        required: [true, "Remarkable Address Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"]
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


