import { random, authentication } from "../helpers"
import { createUser, getUserByEmail } from "../db/users"
import { Request, Response } from "express"

export const register = async (req: Request, res: Response)=>{
    const {email, password, username} = req.body
    try{
        if(!email || !password || !username){
            return res.status(400).json({
                message: 'Email, password, and username are required'
            })
        }
        const existingUser = await getUserByEmail(email)
        
        if(existingUser){
            return res.sendStatus(400)
        }
        const salt = random()
        const hash = authentication(password, salt)
        const newUser = await createUser({
            username,
            email,
            authentication:{
                password: hash,
                salt
            }
        })
        return res.status(201).json(newUser)
    }catch(error){
        return res.status(400).json({
            message: error
        })
    }
}


