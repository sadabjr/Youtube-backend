// require ('dotenv').config({path: './env'})
import dotenv, { config } from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})



connectDB()












// standared way to connect DB: iffi approach

/*
import express from 'express';
const app  = express()


(async()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error)=>{
            console.log('error in connecting DB:', error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("error: ",error);
        throw error;
    }
})()    */