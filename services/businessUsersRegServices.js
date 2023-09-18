const BusinessUsers = require("../models/BusinessUser");
const bcrypt = require("bcryptjs");
const saltRounds = 10

exports.getBusinessRegUserServices = async (email) => {
    // const user = await Users.deleteMany({ });
    const user = await BusinessUsers.findOne({ email: email }).select('-password -phone -role -__v');
    return user;
}

exports.postBusinessRegUserServices = async (data) => {
    const user = await BusinessUsers.create(data);

    const selectedUser = user.toObject(); // Convert to a plain JavaScript object
    delete selectedUser.password;
    delete selectedUser.phone;
    delete selectedUser.role;
    delete selectedUser.__v;

    return selectedUser;
}

exports.updateBusinessRegUserOTPServices = async (otp, id) => {
    const findUserAndUpdateOTP = await BusinessUsers.findOneAndUpdate({ _id: id }, { otp: otp }, {
        runValidators: true
    });
    return findUserAndUpdateOTP;
    // const findUser = await Users.findOne({_id:id})
    // const users = await Users.updateOne(findUser, {otp: otp}, {
    //     runValidators: true
    // });
    // return users;
}

exports.updateBusinessUserInfoService = async (data) => {
    try {
        bcrypt.hash(data?.password, saltRounds, async function (err, hash) {
            const updateUserInfo = {
                email: data?.email,
                password: hash,
                phone: data?.phone,
                first_name: data?.first_name,
                last_name: data?.last_name
            }
            const updateUser = await Users.findOneAndUpdate({ email: data?.email }, updateUserInfo, {
                runValidators: true
            }).select('-password -otp -__v');
            return updateUser;
        });

    } catch (error) {
        console.log(error);
    }
}