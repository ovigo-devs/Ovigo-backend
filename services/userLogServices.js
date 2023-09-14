const Users = require("../models/Users");
const bcrypt = require("bcryptjs")
const saltRounds = 10

exports.getLogUsersService = async (email) => {
    const users = await Users.findOne({ email: email });
    return users;
}

exports.updateLogUsersNewPasswordService = async (email, password) => {
    const findUser = await Users.findOneAndUpdate({email:email}, {password: password}, {
        runValidators: true
    });
    return findUser;
    // const findUser = await Users.findOne({email:email})
    // if(findUser){
    //     const users = await Users.updateOne(findUser, {password: password}, {
    //         runValidators: true
    //     });
    //     return users;
    // }
}