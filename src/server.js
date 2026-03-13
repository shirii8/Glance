

import dotenv from "dotenv"
dotenv.config({
    path:'./.env'
})
// require('dotenv').config({path:'./env'}) To maintain the consistency of the code use a similar import command
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import express from "express";
import connectDB from "./db/index.js";




connectDB()




// // function connectDB(){}
// // connectDB()

// //other method(better)- effy
// const app= express()
// ;(async ()=>{
//     try{
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERR", error)
//         })
//         app.listen(process.env.port, ()=>{
//             console.log(`App is listening on port ${process.env.POT}`);
//         })
//     } catch(error){
//         console.log("Error", error);
//         throw error
//     }
// })()
