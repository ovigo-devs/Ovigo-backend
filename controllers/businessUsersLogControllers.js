const bcrypt = require("bcryptjs")
const saltRounds = 10
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
// const { sendForgotPasswordLink, SendMailForgotPassword } = require("../midleware/authenticationEmail/sendForgotEmaiLink");
const { getBusinessLogUsersService } = require("../services/businessUsersLogServices");

exports.postBusinessLogUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;


        const user = await getBusinessLogUsersService(email)
        if (!user) {
            return res.status(400).json({
                status: 'Failled',
                message: "user get Failed",
                error: error.message
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user?.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                status: 'Failled',
                message: "Password Not Match",
                error: error.message
            })
        }

        // const token = jwt.sign({ email }, process.env.ACCESS_TOKEN);
        const token = jwt.sign({ email }, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hem11bEBnbWFpbC5jb20iLCJpYXQiOjE2OTQ0MzExOTF9.xtLPsJrvJ0Gtr4rsnHh1kok51_pU10_hYLilZyBiRAM');
        return res.send({ ovigoLogInToken: token });

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "user get Failed",
            error: error.message
        })
    }
}

// exports.postForgotPasswordUser = async (req, res, next) => {
//     try {
//         const { email } = req.body;

//         const user = await getLogUsersService(email)
//         if (!user) {
//             return res.status(400).json({
//                 status: 'Failled',
//                 message: "Wrong Email",
//                 error: error.message
//             })
//         }

//         // await sendForgotPasswordLink(user?.email);
//         await SendMailForgotPassword(user?.email);

//         // const token = jwt.sign({ email }, process.env.ACCESS_TOKEN);
//         // ovigoForgotToken: token,
//         return res.send({ 
//             message: "Check Your Email",
//             status: "Success",
//             ovigoForgotTokenEmail: user?.email
//         })

//     } catch (error) {
//         res.status(400).json({
//             status: 'Failled',
//             message: "user get Failed",
//             error: error.message
//         })
//     }
// }

// exports.postNewtPasswordUser = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;

//         bcrypt.hash(password, saltRounds, async function (err, hash) {
//             const users = await updateLogUsersNewPasswordService(email, hash);
//             if (users?.modifiedCount > 0) {
//                 return res.send({
//                     message: "Password Change Successfully",
//                     status: "Success"
//                 });
//             } else {
//                 return res.send({
//                     message: "Password Not Change",
//                     status: "Error"
//                 })
//             }
//         });

//     } catch (error) {
//         res.status(400).json({
//             status: 'Failled',
//             message: "user get Failed",
//             error: error.message
//         })
//     }
// }