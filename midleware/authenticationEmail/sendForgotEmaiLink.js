const nodemailer = require('nodemailer');

const SendMailForgotPassword = async (email) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            secure: true,
            auth: {
                // user: process.env.EMAIL_USERNAME,
                user: 'tempmaildev6@gmail.com',
                // pass: process.env.EMAIL_PASSWORD,
                pass: 'qcofbnbjhcchccij',
            },
        });
        const resetLink = 'http://localhost:5000/'
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'No reply <ovigo@gmail.com>', // sender address
            to: email, // list of receivers
            subject: `Send Your OVIGO APP Registration OTP`,
            html: `<h3>Go to <a href="${resetLink}">link</a> reset your password</h3>`, // html body
        });
        console.log(info)
        return info;
    } catch (error) {
        console.log(error)
        return error;
    }
};

module.exports = {
    SendMailForgotPassword,
};








// const nodemailer = require("nodemailer");
// const mg = require('nodemailer-mailgun-transport');

// exports.sendForgotPasswordLink = (email) => {

//     const auth = {
//         auth: {
//             api_key: process.env.MAILGUN_API_KEY,
//             domain: process.env.MAILGUN_DOMAIN
//         }
//     }

//     const transporter = nodemailer.createTransport(mg(auth));

//     const resetLink = 'http://localhost:5000/'

//     transporter.sendMail({
//         from: "nazmulnobel01885@gmail.com", // verified sender email
//         // to: o_email, // recipient email
//         to: "nazmulbhuyian000@gmail.com", // recipient email
//         subject: `Reset Your Password`, // Subject line
//         html: `
//         <h3>Go to <a href="${resetLink}">link</a> reset your password</h3>
//         `, // html body
//     }, function (error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info?.status);
//         }
//     });
// }

