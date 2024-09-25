const Express = require('express');
import {Response, Request} from "express";

const app = Express();

app.get("/", (req: Request, res: Response)=>{
    res.send("server running");
})

app.listen(5000, ()=>{
    console.log("server running on port 8080");
});