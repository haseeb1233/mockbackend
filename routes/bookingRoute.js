const express=require("express")
const {BookingModel}=require("../models/BookingModel")
const bookingRouter=express.Router()


bookingRouter.post("/",async(req,res)=>{
    try {
        const booking=new BookingModel(req.body)
        await booking.save()
        res.status(201).send("flight booked sucessfully")
    } catch (error) {
        console.log(error);
    }
})



module.exports={bookingRouter}