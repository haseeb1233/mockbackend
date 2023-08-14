const express=require("express")
const bcrypt=require("bcrypt")
var jwt = require('jsonwebtoken');
require("dotenv").config()
const {UserModel}=require("../models/UserModel")

const userRouter=express.Router()


// register
userRouter.post("/register",async(req,res)=>{
    const {name,email,password}=req.body
    const user=await UserModel.findOne({email})
    if(user){
        res.status(400).send("user already register")
    }else{
        
        try {
            
            const hash = bcrypt.hashSync(password,5);
            req.body.password=hash
            const user= new UserModel(req.body)
            await user.save()
            res.status(201).send("user registered succesfully")

        } catch (error) {
            console.log(error)
        }
    }
    


})



// login
userRouter.post("/login",async(req,res)=>{
    try {
       
        const {email,password}=req.body
      
        const user=await UserModel.findOne({email})
   
        const decode=await bcrypt.compareSync(password,user.password);
        if(decode){
                const token=jwt.sign({
                    userid: user._id
                  }, process.env.secretkey, { expiresIn:"1h" });
                  res.send({
                    "msg":"user login sucessful",
                    "token":token
                  })
        }else{
            res.status(201).send("please check your password")
        }

    } catch (error) {
        console.log(error)
    }
     



})








module.exports={userRouter}