const BusinessUsers = require("../models/BusinessUser");

exports.getBusinessRegUserServices = async (email) => {
    // const user = await Users.deleteMany({ });
    const user = await BusinessUsers.findOne({ email: email });
    return user;
}

exports.postBusinessRegUserServices = async (data) => {
    const user = await BusinessUsers.create(data);
    return user;
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
        const findUser = await BusinessUsers.findOne({ email: data?.email })
        if (findUser) {
            const users = await BusinessUsers.updateOne(findUser, data, {
                runValidators: true
            });
            return users;
        }else{
            return null;
        }

    } catch (error) {
        console.log(error);
    }
}