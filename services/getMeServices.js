const Users = require("../models/Users");

exports.getMeUsersService = async (email) => {
    const users = await Users.findOne({email:email}).select('-password -__v')
    return users;
}