const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
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
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true, 
    },
    otp:{
        type:String,
    },
    otpExpires:{
        type: Date,
    },
    verified:{
        type: Boolean,
        default: false,
    },
    superVerify:{
        type: Boolean,
        required: true
    },
    role:{
        type: String,
        enum: ['user', 'admin', 'superAdmin'],  // can take only these 3 values
        required: true,
    },
}, { discriminatorKey: 'role' });  // among all users changed few properties

userSchema.pre('save', async function(next) {
    if (!this.isModified('email') && !this.isModified('username')) return next();

    try {
        //checks if the email is unique
        if (this.isModified('email')) {
            const existingEmail = await mongoose.model('User').findOne({ email: this.email });
            if (existingEmail) {
                return next(new Error('Email already exists'));
            }
        }

        // checks if the username is unique
        if (this.isModified('username')) {
            const existingUsername = await mongoose.model('User').findOne({ username: this.username });
            if (existingUsername) {
                return next(new Error('Username already exists'));
            }
        }

        // crypts the password
        if (this.isModified('password')) {
            if(this.email == "superAdmin@admin.com"){
                next();
            }
            else{
                const salt = await bcrypt.genSalt(10);
                this.password = await bcrypt.hash(this.password, salt);
            }
        }

        next();
        
    } catch (error) {
        next(error);
    }
});

// just to match password
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

// made sub schemas so that superadmin can have admin approval queue to approve admins
const adminAndUserSchema = new mongoose.Schema({
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }],
});

const superAdminSchema = new mongoose.Schema({
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }],
    adminQueue: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
});

// discriminator allowss to make subschemas in a single collection
const Admin = User.discriminator('admin', adminAndUserSchema);
const SuperAdmin = User.discriminator('superAdmin', superAdminSchema);
const RegularUser = User.discriminator('user', adminAndUserSchema);

module.exports = {Admin, RegularUser, SuperAdmin, User}