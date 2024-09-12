const jwt = require("jsonwebtoken");
require("dotenv").config();
// generates jwt token to set in cookie and return to user
function generateToken(savedUser){
    const payload = { id: savedUser._id, username: savedUser.username, role:savedUser.role, superVerify: savedUser.superVerify, verified: savedUser.verified };
    return token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

module.exports = generateToken;