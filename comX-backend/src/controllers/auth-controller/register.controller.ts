import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { create_token } from "../../utils/token";

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
        return res.send("all fields required");
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
        res.json(user);
    }
    catch(error: unknown){
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                const targetField = error.meta?.target as string[];
        
                if (targetField.includes('email')) {
                    return res.status(409).json({ error: 'Email already exists' });
                }
        
                if (targetField.includes('username')) {
                    return res.status(409).json({ error: 'Username already exists' });
                }
            }
        }
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

prisma.$on("query", async(e) => {
    console.log(`${e.query} ${e.params}`);
})