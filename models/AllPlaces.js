const mongoose = require("mongoose");
const allPlacesSchema = new mongoose.Schema({
    place_name: {
        type: String,
        required: [true, "Hotel Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    location_name: {
        type: String,
        required: [true, "Hotel Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [40, "Name is to large"],
    },
    img: {
        required: true,
        type: String
    },
    over: [
        {
            image: String,
        },
    ],
    tradition: [
        {
            name: String,
            image: String,
            des: String,
        },
    ],

})

const AllPlaces = mongoose.model("allplaces", allPlacesSchema);

module.exports = AllPlaces;


