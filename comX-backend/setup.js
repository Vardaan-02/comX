const {SuperAdmin} = require("./models/user.model");
const connectDB = require('./utils/connection');
connectDB();

async function setup(){
    const data = new SuperAdmin({ name:"super Admin", email:"superAdmin@admin.com", password:"admin", username:"superAdmin", role: "superAdmin", superVerify: true, verified:true });
    const superAdmin = await data.save();
    if(superAdmin){
        console.log("Setup completed");
    }
    else{
        console.log("Error in setting up");
    }
}
setup();
