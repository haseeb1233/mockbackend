const express=require("express")
const {FlightModel}=require("../models/FlightModel")
const flightRouter=express.Router()



// add flights

flightRouter.post("/",async(req,res)=>{
    const {flightNo}=req.body
    const flight=await FlightModel.findOne({flightNo})
    if(flight){
        res.status(201).send("flight alredy present")
    }else{
        const flightnew= new FlightModel(req.body)
        await flightnew.save()
        res.status(200).send("fligth added suceesfully")
    }
})

// get all data

flightRouter.get("/",async(req,res)=>{
    const flights=await FlightModel.find()
    res.status(200).send(flights)
})


// get id data
flightRouter.get("/:id",async(req,res)=>{
    const flights=await FlightModel.findById(req.params.id)
    res.status(200).send(flights)
})

// udpdate

flightRouter.put("/:id",async(req,res)=>{
    const data=await FlightModel.findByIdAndUpdate(req.params.id,req.body)
    res.status(204).send("data updated sucessfully")
})

// delete
flightRouter.delete("/:id",async(req,res)=>{
    const data=await FlightModel.findByIdAndDelete(req.params.id)
    res.status(202).send("data Deleted sucessfully")
})









module.exports={flightRouter}