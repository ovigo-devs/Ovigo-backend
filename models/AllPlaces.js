const mongoose = require("mongoose");
const allPlacesSchema = new mongoose.Schema({
    country: {
        type: String,
        default: "Bangladesh"
    },
    district: {
        type: String,
        required: [true, "Country Name must be required"]
    },
    division: {
        type: String,
        required: [true, "Country Name must be required"]
    },
    sub_district: {
        type: String,
        required: [true, "Sub District Name must be required"]
    },
    // Spot name is place name
    place_name: {
        type: String,
        required: [true, "Place Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    overview: [
        {
            image: String,
        },
    ],
    tradition: [
        {
            title: String,
            image: String,
            about: String,
        },
    ],
    three_d_maps: {
        type: String
    },
    thinks_to_do: [
        {
            title: String,
            image: String,
            about: String,
        },
    ],
    vr_image: [
        {
            image: String,
        },
    ],
    discover_360_image: [
        {
            image: String,
        },
    ],
    history: {
        type: String
    },
    wildlife: {
        type: String
    },
    warning: {
        type: String
    },
    trial_guide: {
        type: String
    },
    priority: {
        type: String,
        default: "NO"
    },
    most_priority: {
        type: String,
        default: "NO"
    },
    primary_place_name: {
        type: String,
        required: [true, "Primary Place Name Required"]
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
});

const AllPlaces = mongoose.model("allplaces", allPlacesSchema);

module.exports = AllPlaces;


