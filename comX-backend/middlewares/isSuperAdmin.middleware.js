const responseCodes = require("../utils/responseCodes");
// I am making sure that I always use this after isAuth middleware hence just checking if the request is from superAdmin
const isSuperAdmin = (req, res, next) => {
    if(req.user.username == "superAdmin"){
        next();
    }
    console.warn("Somebody tried to access super Admin");
    return responseCodes.clientError.forbidden(res, "Access Denied: not a super admin");    
};

module.exports = isSuperAdmin;
