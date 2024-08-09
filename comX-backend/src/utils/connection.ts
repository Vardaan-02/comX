import mongoose from "mongoose";

export const database = mongoose.connect("mongodb+srv://PrathamJain:PrathamJain@atlascluster.jiygghd.mongodb.net/comX").then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("failed to connect to database ",err);
})