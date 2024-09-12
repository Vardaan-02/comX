const responseCodes = require("../utils/responseCodes");
// I am making sure that I always use this after isAuth middleware hence just checking if the request is from admin
const isAdmin = (req, res, next) => {
    if(req.user.role == "user"){
        return responseCodes.clientError.forbidden(res, "Access Denied: not an admin");    
    }
    next();
};

module.exports = isAdmin;
