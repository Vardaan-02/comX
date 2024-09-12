function validatePassword(password) {
    const errors = [];
    // used regex for validating password
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter (a-z).");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter (A-Z).");
    }

    if (!/\d/.test(password)) {
        errors.push("Password must contain at least one number (0-9).");
    }

    if (!/[@$!%*?&]/.test(password)) {
        errors.push("Password must contain at least one special character (@$!%*?&).");
    }

    if (errors.length > 0) {
        return {
            valid: false,
            message: "Password validation failed",
            errors: errors
        };
    } else {
        return {
            valid: true,
            message: "Password is valid"
        };
    }
}

module.exports = validatePassword;