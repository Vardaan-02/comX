const nodemailer = require('nodemailer');
require("dotenv").config();

// exporting mail transporter setup done on google cloud workspace made a new gmailID for the same
const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: 465,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

console.log("nodemailer configured Successfully");

module.exports = transporter;