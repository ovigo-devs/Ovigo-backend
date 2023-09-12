
const mongoose = require("mongoose");

const DiscoverExplorersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [30, "Name is to large"],
    },
    place: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    }
})

const DiscoverExplorers = mongoose.model("discoverexplorers", DiscoverExplorersSchema);

module.exports = DiscoverExplorers;