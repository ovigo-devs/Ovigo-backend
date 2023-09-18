
const mongoose = require("mongoose");

const businessUsersRegSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: "businessUser",
    },
    otp: {
        type: String
    },
    first_name: {
        type: String,
        minLength: [2, "At least 2 caracted must be provide"],
        maxLength: [15, "Name is to large"],
    },
    last_name: {
        type: String,
        minLength: [2, "At least 2 caracted must be provide"],
        maxLength: [15, "Name is to large"],
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

const BusinessUsers = mongoose.model("businessusers", businessUsersRegSchema);

module.exports = BusinessUsers;