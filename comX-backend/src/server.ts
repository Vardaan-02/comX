const Express = require('express');
import {Response, Request} from "express";
require('global-agent/bootstrap');

process.env.GLOBAL_AGENT_HTTP_PROXY = 'http://172.31.2.3:8080';

const app = Express();

app.get("/", (req: Request, res: Response)=>{
    res.send("server running");
})

app.listen(5000, ()=>{
    console.log("server running on port 8080");
});