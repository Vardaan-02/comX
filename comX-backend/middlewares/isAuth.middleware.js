const jwt = require('jsonwebtoken');
require('dotenv').config();
const responseCodes = require("../utils/responseCodes");

const isAuthorised = (req, res, next) => {
    const token = req.cookies.token; 
    // getting the token from cookie
    if (!token) {
        return responseCodes.clientError.forbidden(res, "Access Denied: No Token Provided");
    }

    try {
        // verifying the jwt token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; 
        // superVerify is for admins if verified by superAdmin
        if(!verified.superVerify){
            return responseCodes.clientError.forbidden(res, "Access Denied: You will soon be verified by superAdmin");
        }
        // email verification check
        if(!verified.verified){
            return responseCodes.clientError.forbidden(res, "Access Denied: Your email is not verified");
        }
        next();
    } catch (err) {
        return responseCodes.clientError.badRequest(res, "Invalid token");
    }
};

module.exports = isAuthorised;
