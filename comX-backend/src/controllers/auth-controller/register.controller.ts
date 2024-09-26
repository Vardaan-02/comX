import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { create_token } from "../../utils/token";
import { responseCodes } from "../../utils/response-codes";

const prisma = new PrismaClient({log: [
        {
            emit: "event",
            level : "query",
        },
    ],
});

export const register = async(req: Request, res: Response) => {
    const {name, username, email, password, designation} = req.body;
    if(!name || !username || !email || !password || !designation){
        return responseCodes.clientError.notFound(res, "All fields are required");
    }
    try{
        const user = await prisma.user.create({
            data:{
                email: email,
                name: name,
                username: username,
                password: password,
                designation: designation
            }
        })        
        await create_token(res, user);
        user.password = "";
        return responseCodes.success.created(res, user, "User created successfully");
    }
    catch(error: unknown){
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                const targetField = error.meta?.target as string[];
        
                if (targetField.includes('email')) {
                    return responseCodes.clientError.badRequest(res, "Email already exists");
                }
        
                if (targetField.includes('username')) {
                    return responseCodes.clientError.badRequest(res, "Username already exists");
                }
            }
        }
        console.log(error);
        return responseCodes.serverError.internalServerError(res, "Internal server error");
    }
}

prisma.$on("query", async(e) => {
    console.log(`${e.query} ${e.params}`);
})