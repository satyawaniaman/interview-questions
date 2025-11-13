import express from "express";
import http from "http";
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import router from "./router";
dotenv.config()
const app= express()
app.use(cors({
    credentials: true
}))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
const server= http.createServer(app)
app.use("/", router);

app.get("/", (req, res) => {
  res.send("API is running...");
});
server.listen(8080, ()=>{
    console.log('Server running on port http://localhost:8080')
})
mongoose.connect(process.env.DATABASE_URL || '')
    .then(()=>{
        console.log('Connected to database')
    })
    .catch((err)=>{
        console.log('Error connecting to database', err)
    })