const { promisify } = require('util');
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getMeUsersService } = require('../services/getMeServices');

exports.getMeUser = async (req, res, next) => {
    try {
        const token = await req.headers?.authorization?.split(" ")?.[1];
        // const token = req.headers?.authorization;
        const decode = await promisify(jwt.verify)(token, process.env.ACCESS_TOKEN);

        const user= await getMeUsersService(decode.email);
        if(user){
            res.status(200).json({
                status: 'Successfully',
                email: decode.email,
                userPhone: user.phone,
                userRole: user.role,
            })
        }else{
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