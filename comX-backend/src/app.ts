import express from "express";
import {database} from "./utils/connection";

const app = express();
database;
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("server is running on port 4000");
})

import authRoutes from "./routes/auth.routes";
app.use("/auth", authRoutes);

app.listen(4000, ()=>{
    console.log("Server running on port 4000");
})