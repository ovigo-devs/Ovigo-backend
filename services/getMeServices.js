const BusinessUsers = require("../models/BusinessUser");
const Users = require("../models/Users");

exports.getMeUsersService = async (email) => {
    const users = await Users.findOne({email:email}).select('-password -__v')
    return users;
}

exports.getMeBusinessUsersService = async (email) => {
    const users = await BusinessUsers.findOne({email:email}).select('-password -__v')
    return users;
}

exports.getUsersInformationService = async (email) => {
    const users = await Users.findOne({email:email})
    return users;
}