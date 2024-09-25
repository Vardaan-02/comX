"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require('express');
const app = Express();
app.get("/", (req, res) => {
    res.send("server running");
});
app.listen(5000, () => {
    console.log("server running on port 8080");
});
