const express=require('express')
const router=express.Router()
const ticketBookingModel=require('../models/ticketbookingModel')

// const { async } = require('parse/lib/browser/Storage')

router.get('/',async (req,res)=>{
    try{
        const ticketbooking = await ticketBookingModel.find();
        console.log(ticketbooking)
        res.json({ticketbooking: ticketbooking})
    }catch(e){
        console.log(e)
    }
})

router.get('/booking',(req,res)=>{
    let message=""
    if(req.query.type === "error") {
        message = "You cannot submit the ticket with an empty data"
        res.json("ticketbooking", {message})
    }else{
        res.json({ticketbooking: ticketbooking})
    }
    
})

router.post('/booking',async (req,res)=>{
    try{
        const ticket= new ticketBookingModel(req.body)
        await ticket.save()
        res.json("Succesfully booked")
    }catch(e){
        console.log(e)
        res.json("Failed to book Bus Ticket")
    }
})

router.get('/booking/:id', async (req,res)=>{
    try{
        const ticketbooking = await ticketBookingModel.findById(req.params.id)
        console.log(ticket)
        res.json({ticketbooking: ticketbooking})
    }catch(e){
        console.log(e)
        let message="The edit are not saved properly"
        res.json({message})
    }
})

router.delete('/booking/:id', async(req,res)=>{
    try{
        await ticketBookingModel.findByIdAndDelete(req.params.id)
        let message="You have sucessfully deleted your bus ticket booking"
        res.json({message})

    }catch(e){
        console.log(e)
        let message="You did not delet your bus ticket "
        res.json({meddage})
    }
})

router.put('/booking/:id',async (req,res)=>{
    try{
        await ticketBookingModel.findByIdAndUpdate(req.params.id, req.body)
        let message="You can edit your bus ticket booking"
        res.json({message})

    }catch(e){
        console.log(e)
        let message="Sorry, You did not make any changes to your bus ticket booking"
        res.json({message})
    }
})

module.exports=router