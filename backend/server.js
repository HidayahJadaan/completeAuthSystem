// const express = require('express')
import  express from 'express';
import { connectDB } from './db/connectDB.js';
import dotenv from 'dotenv'


dotenv.config()
const app = express();

app.get("/", (req,res)=>{
res.send('Hello World 123')
})


// ====================
// ====================
app.listen(3000, ()=>{
    connectDB();
    console.log('Server is running on port 3000');
    
})


// 123456Hh&
// mongodb+srv://hedaia-auth:123456Hh&@cluster0.5wk48dj.mongodb.net/?appName=Cluster0