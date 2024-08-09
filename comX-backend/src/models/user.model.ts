import mongoose from "mongoose"

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    dob: {
        type: Date,
    },
    bio: {
        type: String,
    },
    interests: Array,
    college: String,
    experience: Array,
}, {timestamps: true})

const User = mongoose.model("Users", user);
export default User;