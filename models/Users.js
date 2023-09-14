
const mongoose = require("mongoose");

const usersRegSchema = new mongoose.Schema({
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
        type: String,
        default: "user",
    },
    otp: {
        type: String
    },
    name: {
        type: String,
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [30, "Name is to large"],
    },
    image: {
        type: String,
    },
    date_birth: {
        type: String,
    },
    national_id: {
        type: String,
    },
    gender: {
        type: String,
    },
    present_address: {
        type: String,
    },
    permanent_address: {
        type: String,
    },
    nationality: {
        type: String,
    },
    religion: {
        type: String,
    },
    passport_number: {
        type: String,
    },
    passport_exp_date: {
        type: String,
    },
    marital_status: {
        type: String
    }
})

const Users = mongoose.model("users", usersRegSchema);

module.exports = Users;