import mongoose, { connect } from 'mongoose';
import {DB_NAME} from './constants';


const connectDB = async () => {
    try{

    }
    catch(error){
        console.log("mongoDB connection error: ", error)
        process.exit(1);
    }
}


















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