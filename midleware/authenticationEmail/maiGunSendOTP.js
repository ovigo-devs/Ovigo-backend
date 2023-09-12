const nodemailer = require("nodemailer");
const mg = require('nodemailer-mailgun-transport');

exports.sendRegistrationOTP = (otp, email) => {

    const auth = {
        auth: {
            api_key: process.env.MAILGUN_API_KEY,
            domain: process.env.MAILGUN_DOMAIN
        }
    }

    const transporter = nodemailer.createTransport(mg(auth));

    transporter.sendMail({
        from: "nazmulnobel01885@gmail.com", // verified sender email
        // to: o_email, // recipient email
        to: "nazmulbhuyian000@gmail.com", // recipient email
        subject: `Send Your OVIGO APP Registration OTP`, // Subject line
        html: `
        <h3>Your OTP IS ${otp}</h3>
        `, // html body
    }, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info?.status);
        }
    });
}

