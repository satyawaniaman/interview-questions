import authenticationRouter from './authentication'
import express from 'express'



const router = express.Router()
router.use('/auth', authenticationRouter)



export default router