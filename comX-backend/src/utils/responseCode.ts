import { Response } from 'express';
export function response500(res:Response, message: string){
    return res.status(500).json({
        success: false,
        msg: message
    })
}

export function response200(res: Response, message: string){
    return res.status(200).json({
        success: true,
        msg: message
    })
}

export function response201(res: Response, message: string, data: object){
    return res.status(201).json({
        success: true,
        msg: message,
        data: data
    })
}

export function response400(res: Response, message: string){
    return res.status(400).json({
        success: false,
        msg: message,
    })
}