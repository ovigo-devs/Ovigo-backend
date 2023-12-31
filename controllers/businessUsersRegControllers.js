const { SendMail } = require("../midleware/authenticationEmail/maiGunSendOTP");

const { getBusinessRegUserServices, postBusinessRegUserServices, updateBusinessRegUserOTPServices, updateBusinessUserInfoService } = require("../services/businessUsersRegServices");
const { getRegUserServices } = require("../services/usersRegServices");
const bcrypt = require("bcryptjs");
const saltRounds = 10


exports.postBusinessRegUser = async (req, res, next) => {
    try {
        const data = req.body;
        const inserted = await getRegUserServices(data?.email);
        if (inserted) {
            return res.send({ message: 'This email also sign in as a user' });
        }
        const inserted2 = await getBusinessRegUserServices(data?.email);
        if (inserted2) {
            return res.send({ message: 'Previously Added' })
        }
        const otp = Math.floor(1000 + Math.random() * 9000);

        const newUser = {
            email: data.email,
            otp: otp
        }
        const result = await postBusinessRegUserServices(newUser);
        if (!result) {
            return res.send('User Not Added. Something Wrong');
        } else {
            // await sendRegistrationOTP(result?.otp, result?.email)
            await SendMail(result?.otp, result?.email)
            res.status(200).json({
                status: 'Successfully',
                data: result
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "User Registration Failed",
            error: error.message
        })
    }
}


exports.postBusinessRegUserAccountVerify = async (req, res, next) => {
    try {
        const data = req.body;
        const user = await getBusinessRegUserServices(data?.email);
        if (!user) {
            return res.send({ message: 'Something Wrong' });
        }
        const otp = user?.otp;
        if (data?.otp == otp) {
            res.status(200).json({
                status: 'Successfully'
            })
        } else {
            res.status(400).json({
                status: 'Failled',
                message: "OTP not match",
                error: error.message
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "OTP not match",
            error: error.message
        })
    }
}

exports.postRegUserResendCode = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await getBusinessRegUserServices(email);
        if (!user) {
            return res.send({ message: 'Something Wrong' });
        }
        const otp = Math.floor(1000 + Math.random() * 9000);
        const updateOTP = await updateBusinessRegUserOTPServices(otp, user?._id);
        if (updateOTP) {
            const newOtp = await getBusinessRegUserServices(email);
            await SendMail(newOtp?.otp, email);
            res.send({
                message: "New OTP Send",
                otp: newOtp?.otp
            })
        } else {
            res.status(400).json({
                status: 'Failled',
                message: "Something Wrong",
                error: error.message
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Something Wrong",
            error: error.message
        })
    }
}

exports.updateBusinessUserInfo = async (req, res, next) => {
    try {
        const data = req.body;
        bcrypt.hash(data?.password, saltRounds, async function (err, hash) {
            const updateUserInfo = {
                email: data?.email,
                password: hash,
                phone: data?.phone,
                first_name: data?.first_name,
                last_name: data?.last_name
            }

            const result = await updateBusinessUserInfoService(updateUserInfo);
            if (result?.modifiedCount > 0) {
                return res.status(200).json({
                    status: 'Successfully Updated',
                    data: result
                })
            }
            return res.status(400).json({
                status: 'Nothing Update',
                data: result
            })
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Nothing Update",
            error: error.message
        })
    }
}

