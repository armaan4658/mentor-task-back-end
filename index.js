import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import {router} from './routes/mentor.js';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
mongoose.connect(process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true});
const con = mongoose.connection;
con.on("open",()=>console.log("Mongo DB is connected"));
app.get('/',(req,res)=>{
    res.send("Server is running");
})
app.use('/task',router);
app.listen(PORT,()=>console.log(`Server is running at port : ${PORT}`));