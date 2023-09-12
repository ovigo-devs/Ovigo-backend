
const mongoose = require("mongoose");

const usersRegSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: [true, "Name must be required"],
    //     minLength: [3, "At least 3 caracted must be provide"],
    //     maxLength: [30, "Name is to large"],
    // },
    email: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    role: {
        required: true,
        type: String,
        default: "user",
    },
    otp: {
        required: false,
        type: String
    }
})

const Users = mongoose.model("users", usersRegSchema);

module.exports = Users;