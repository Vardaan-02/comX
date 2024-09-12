require('dotenv').config();
const transporter = require("../utils/nodeMailerConfig");
const generateOtp = require("./generateOTP");
const sendOtpEmail = async (user) => {
    const { otp, otpExpires } = generateOtp();  //generates random OTP
    
    //saving otp in mongoDB so that I don't loose. Thought of making a map but this felt safe in case server is down
    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();
    try{
        const mailOptions = {
            from: "Pratham Jain <pratham@gmail.com>",
            to: user.email,
            subject: 'Email Verification OTP',
            text: `Your OTP for email verification is: ${otp}. It is valid for 10 minutes.`,
        };
        await transporter.sendMail(mailOptions);    // transporter is the setup of smtp service
        return true;
    }
    catch(error){
        console.log(error);
        return false;
    }
  };

module.exports = sendOtpEmail;