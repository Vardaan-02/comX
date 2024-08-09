import { Request, Response } from "express";
import {z} from "zod";
import bcrypt from "bcrypt";
import { response200, response201, response400, response500 } from "../utils/responseCode";
import { userInterface } from "../utils/modelInterfaces";
import User from "../models/user.model";

async function validate(name:string, email:string, password:string, username:string, res:Response){
    const emailSchema = z.string().email();
    const passwordSchema = z.string().min(8);
    if(name == "" || email == "" || password == "" || username == ""){
        response400(res, "All fields are required");
        return false;
    }
    if(name && email && password && username){
        if(emailSchema.safeParse(email).success){
            if(passwordSchema.safeParse(password).success){
                const existingUser = await User.findOne({$or: [{email}, {username}]});
                if(existingUser){
                    response400(res, "Email / Username already exists");
                    return false;
                }
                return true;
            }
            else{
                response400(res, "Password must be 8 characters long");
                return false;
            }
        }
        else{
            response400(res, "Not a valid email");
            return false;
        }
    }
    else{
        response400(res, "All fields are required");
        return false;
    }
}

export const validCredentials = async(req: Request, res: Response)=>{
    const {name, email, password, username} = req.body;
    let verdict = await validate(name, email, password, username, res);
    if(verdict){
        response200(res, "Credentials are valid");
    }
}
export const register = async(req: Request, res: Response)=>{
    const {name, email, password, username, dob, bio, interests, college, experience} = req.body;
    try{
        let verdict = await validate(name, email, password, username, res);
        if(verdict){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new User({
                name, email, password:hashedPassword, username, dob, bio, interests, college, experience
            });
            await newUser.save();
            const { password: _, ...data } : userInterface = newUser.toObject();
            response201(res, "Credentials are valid", data);
        }
    }
    catch(err){
        return response500(res, "Internal server error");
    }
}
export const login = async(req: Request, res: Response)=>{
    const {identifier, password} = req.body;
    try{
        let existingUser = await User.findOne({email: identifier});
        if(existingUser){
            const isMatch = await bcrypt.compare(password, existingUser.password);
            if(isMatch){
                const { password: _, ...data } : userInterface = existingUser.toObject();
                return response201(res, "login true", data);
            }
            else{
                return response400(res, "Wrong Email or Password");
            }
        }
        existingUser = await User.findOne({username : identifier});
        if(existingUser){
            const isMatch = await bcrypt.compare(password, existingUser.password);
            if(isMatch){
                const { password: _, ...data } : userInterface = existingUser.toObject();
                return response201(res, "login true", data);
            }
            else{
                return response400(res, "Wrong Username or Password");
            }
        }
        return response400(res, "Wrong email or username");
    }
    catch(err){
        return response500(res, "Internal server error");
    }
}
export const logout = async(req: Request, res: Response)=>{
    res.send("logout api");
}