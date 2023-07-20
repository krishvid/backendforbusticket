const express= require('express')
const app=express()

const cors = require('cors');


const mongoose=require('mongoose')
require('dotenv').config()



const authController=require('./comtrollers/authController')
const busticketComtroller= require('./comtrollers/busticketController')
mongoose.connect(process.env.MONGODB)
  .then(() => console.log("Mongo connected"));


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", authController)
app.use("/bus", busticketComtroller)
const PORT=process.env.PORT


app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)
})
