import crypto from 'crypto'
import dotenv from 'dotenv'
dotenv.config()
export const random = ()=>{
    return crypto.randomBytes(128).toString('base64')
}
export const authentication = (password: string, salt: string)=>{
    return crypto.createHmac('sha512', [salt,password].join(''))
        .update(process.env.SECRET || '')
        .digest('hex')
}