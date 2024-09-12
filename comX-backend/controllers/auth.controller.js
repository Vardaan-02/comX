const responseCodes = require("../utils/responseCodes");
const {User, SuperAdmin} = require("../models/user.model");
const validatePassword = require("../helpers/validatePassword");
const generateToken = require("../helpers/generateToken");
const sendOtpEmail = require("../helpers/sendOTP");

exports.register = async (req, res) => {
    const { name, email, password, username, role } = req.body;
    // checking all the required fields
    if (!name || !email || !password || !username || !role) {
        return responseCodes.clientError.badRequest(res, "All fields are required");
    }
    // validating roles
    if(!(role == "admin" || role == "user")){
        return responseCodes.clientError.badRequest(res, "Invalid role");
    }

    try {
        const validationResult = validatePassword(password);
        if (!validationResult.valid) {
            return responseCodes.clientError.badRequest(res, validationResult.errors);
        } 
        // different verify status for admins and users
        let superVerify = true;
        if(role == "admin")superVerify = false;

        // saving the user in mongoose
        const user = new User({ name, email, password, username, role, superVerify });
        const savedUser = await user.save();
        const token = generateToken(savedUser); // generates a jwt token

        res.cookie('token', token, {
            httpOnly: true, 
            maxAge: 3600000 
        });         // setting up cookie
    
        const sentMail = await sendOtpEmail(user);
        // sending an email to verify users email

        if(!sentMail){
            return responseCodes.serverError.internalServerError(res, "Server error: Unable to sent mail")
        }
        
        // different return messages for admins and users
        if(superVerify == false){
            await SuperAdmin.findOneAndUpdate(
                {username: "superAdmin"}, 
                { $push: { adminQueue: user._id } },
            );
            return responseCodes.success.created(res, {}, "verify email OTP is sent at your email. Admin registered soon will be verified by superAdmin");
        }
        
        return responseCodes.success.created(res, {}, "Registration successful. Please check your email for the OTP.");
    
    } catch (error) {
        console.log(error); //handling errors while saving user
        if (error.message.includes('Email')) {
            return responseCodes.clientError.forbidden(res, "Email already exists");
        } else if (error.message.includes('Username')) {
            return responseCodes.clientError.forbidden(res, "Username already exists");
        }

        return responseCodes.serverError.internalServerError(res, "Server error, could not register user.");
    }
};


exports.login = async (req, res) => {
    const { emailOrUsername, password } = req.body;

    if (!emailOrUsername || !password) {
        return responseCodes.clientError.badRequest(res, "Email/Username and password are required");
    }

    try {
        // different flow for superAdmin login
        if(emailOrUsername == "superAdmin@admin.com" && password == "superAdmin"){
            const user = await User.findOne({role: "superAdmin"});
            const token = generateToken(user);  // generates a jwt token for superAdmin

            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 3600000
            });     // setting up the cookie

            return responseCodes.success.ok(res, {}, "Welcome SuperAdmin");
        }

        const user = await User.findOne({
            $or: [{ email: emailOrUsername }, { username: emailOrUsername }]
        });     //finding the user with both email and username

        if (!user) {
            return responseCodes.clientError.unauthorized(res, "Invalid email/username or password");
        }

        const isMatch = await user.comparePassword(password);   // using the method made in model to compare passwords

        if (!isMatch) {
            return responseCodes.clientError.unauthorized(res, "Invalid email/username or password");
        }

        // different login process for admin 
        if(user.role == "admin" && user.superVerify == false){
            return responseCodes.clientError.unauthorized(res, "You are not verified by superAdmin wait for some time");
        }

        const token = generateToken(user); // generates token

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 3600000
        }); // setting up the response with cookie

        return responseCodes.success.ok(res, {}, "Login successful");

    } catch (error) {
        console.log(error);
        return responseCodes.serverError.internalServerError(res, "Server error, could not login.");
    }
};


exports.logout = (req, res) => {
    try {
        res.clearCookie('token');   // only destrying cookie made sure user is authorized using isAuth middleware

        return responseCodes.success.ok(res, {}, "Logout successful");
    } catch (error) {
        console.log(error);
        return responseCodes.serverError.internalServerError(res, "Server error, could not logout.");
    }
};



exports.verifyEmail = async (req, res) => {
    const { email, otp } = req.body;
  
    try {
        // finds user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return responseCodes.clientError.badRequest("User not found");
      }
      
      // checking if verification in pending
      if (user.verified) {
        return responseCodes.clientError.badRequest(res, 'User is already verified');
      }
      
      // matching opt
      if (user.otp != otp) {
        return responseCodes.clientError.badRequest(res, "Invalid OTP");
      }
  
    // checking if otp is expired
      if (user.otpExpires < Date.now()) {
        return responseCodes.clientError.badRequest(res, 'OTP has expired');
      }
      
      // removing the saved details from mongoDB
      user.verified = true;
      user.otp = null;
      user.otpExpires = null; 
      const savedUser = await user.save();
      
      const token = generateToken(savedUser);

        res.cookie('token', token, {
            httpOnly: true, 
            maxAge: 3600000 
        });     // returning the response with cookie

      return responseCodes.success.ok(res, {}, "Email successfully verified");
    } catch (error) {
        console.log(error);
        return responseCodes.serverError.internalServerError(res, "server error");
    }
  };