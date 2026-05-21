// const express = require('express')
import dotenv from 'dotenv'
import  express from 'express';
dotenv.config()
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(cors({
	origin:"http://localhost:3000",
	credentials: true
}));

app.use(express.json())
// app.get("/", (req,res)=>{
// res.send('Hello World 123')
// })

app.use(cookieParser())//allow parse incomming cookie

app.use("/api/auth", authRoutes)


// ====================
// ====================
app.listen(5000, ()=>{
    connectDB();
    console.log('Server is running on port 5000');
    
})


// 123456Hh&
// mongodb+srv://hedaia-auth:123456Hh&@cluster0.5wk48dj.mongodb.net/?appName=Cluster0

// qrXjfDOSIRT7yRtK
// mongodb+srv://hkaljadaan18_db_user:qrXjfDOSIRT7yRtK@cluster0.expo28y.mongodb.net/?appName=Cluster0