const express=require("express")
const dashboardRouter= express.Router()
const {BookingModel}=require("../models/BookingModel")



dashboardRouter.get("/",async(req,res)=>{
   const data=await BookingModel.find().populate({path: 'user',path:"flight"})
   res.send(data)
})




module.exports={dashboardRouter}