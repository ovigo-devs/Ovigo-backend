const mongoose = require("mongoose");
const allPlacesSchema = new mongoose.Schema({
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
    about: {
        type: String
    },
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
})

const AllPlaces = mongoose.model("allplaces", allPlacesSchema);

module.exports = AllPlaces;


