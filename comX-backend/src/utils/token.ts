const jwt = require("jsonwebtoken");
import { Request, Response } from "express";
import { User } from "../types/user";
require("dotenv").config();

const create_token = async (res: Response, user: User) => {
    const token = await jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: "30d"});
    res.cookie("token", token, {maxAge:1000 * 60 * 60 * 24 * 30, httpOnly: true});
}

const verify_token = async (req: Request) => {
    const authenticatedToken = req.cookies.token;
        if(authenticatedToken){
            const decode = await jwt.verify(authenticatedToken, process.env.TOKEN_SECRET);
            // check if decode user exists only if it exists we return true else false
            return true;
        }
        else{
            return false;
        }
}

export {create_token, verify_token};