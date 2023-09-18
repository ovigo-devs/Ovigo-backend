const mongoose = require("mongoose");
const AllTouristSpotNameSchema = new mongoose.Schema({
    division: {
        type: String,
        required: [true, "Place Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    district: {
        type: String,
        required: [true, "Location Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    sub_district: {
        type: String,
        required: [true, "Place Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    spot_name: {
        type: String,
        required: [true, "Place Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    activity: {
        type: String,
        required: [true, "Location Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    remarkable_address: {
        type: String,
        required: [true, "Location Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    known_as: {
        type: String,
        required: [true, "Location Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
   
})

const AllTouristSpotName = mongoose.model("touristspots", AllTouristSpotNameSchema);

module.exports = AllTouristSpotName;


