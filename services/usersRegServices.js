const Users = require("../models/Users")


exports.getRegUserServices = async (email) => {
    // const user = await Users.deleteMany({ });
    const user = await Users.findOne({ email: email }).select('-password -phone -role -__v');
    return user;
}

exports.postRegUserServices = async (data) => {
    const user = await Users.create(data);

    const selectedUser = user.toObject(); // Convert to a plain JavaScript object
    delete selectedUser.password;
    delete selectedUser.phone;
    delete selectedUser.role;
    delete selectedUser.__v;

    return selectedUser;
}

exports.updateRegUserOTPServices = async (otp, id) => {
    // const findUserAndUpdateOTP = await Users.findOneAndUpdate({_id: id}, {otp: otp}, {
    //     runValidators: true
    // });
    // return findUserAndUpdateOTP;
    const findUser = await Users.findOne({ _id: id })
    const users = await Users.updateOne(findUser, { otp: otp }, {
        runValidators: true
    });
    return users;
}

exports.updateUserInfoService = async (data) => {
    try {
        const updateUserInfo = await Users.findOne({email: data?.email})
        const users = await Users.updateOne(updateUserInfo, data, {
            runValidators: true
        });
        return users;
    } catch (error) {
        console.log(error);
    }
    // try {
    //     const updateUserInfo = await Users.findOneAndUpdate({email: data?.email}, data, {
    //         runValidators: true
    //     }).select('-password -otp -__v');
    //     return updateUserInfo;
    // } catch (error) {
    //     console.log(error);
    // }
}