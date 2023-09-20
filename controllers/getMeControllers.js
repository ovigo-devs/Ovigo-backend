const { promisify } = require('util');
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getMeUsersService, getMeBusinessUsersService } = require('../services/getMeServices');
const bcrypt = require("bcryptjs")
const saltRounds = 10

exports.getMeUser = async (req, res, next) => {
    try {
        const token = await req.headers?.authorization?.split(" ")?.[1];
        // const token = req.headers?.authorization;
        const decode = await promisify(jwt.verify)(token, process.env.ACCESS_TOKEN);

        const user = await getMeUsersService(decode.email);

        if (user) {
            return res.status(200).json({
                status: 'Successfully',
                email: decode.email,
                userPhone: user.phone,
                userRole: user.role,
            })
        } else {
            const BusinessUser = await getMeBusinessUsersService(decode.email);
            if (BusinessUser) {
                return res.status(200).json({
                    status: 'Successfully',
                    email: decode.email,
                    userPhone: user.phone,
                    userRole: user.role,
                })
            } 
            res.status(400).json({
                status: 'Failled',
                message: "Token is not valid",
                error: error.message
            })
        }

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "get me Failed",
            error: error.message
        })
    }
}


exports.getUserInformation = async (req, res, next) => {
    try {

        const email = req.params.email;

        const user= await getMeUsersService(email);

        if (user) {
            return res.status(200).json({
                status: 'Successfully',
                data: user
            })
        } else {
            const BusinessUser = await getMeBusinessUsersService(email);
            if (BusinessUser) {
                return res.status(200).json({
                    status: 'Successfully',
                    data: BusinessUser
                })
            } 
            res.status(400).json({
                status: 'Failled',
                message: "User Information Get Failed",
                error: error.message
            })
        }

        // if(user){
        //     res.status(200).json({
        //         status: 'Successfully',
        //         data: user
        //     })
        // }else{
        //     res.status(400).json({
        //         status: 'Failled',
        //         message: "User Get Failed",
        //         error: error.message
        //     })
        // }

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Something Wrong",
            error: error.message
        })
    }
}