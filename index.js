const express =require("express")
const app =express()
require("dotenv").config()
const {connection}=require("./db")
const {userRouter}=require("./routes/userRoute")
const {flightRouter}=require("./routes/flightRoute")
const {bookingRouter}=require("./routes/bookingRoute")
const {dashboardRouter}=require("./routes/dashboardRouter")
app.use(express.json())
app.use("/",userRouter)
app.use("/flight",flightRouter)
app.use("/booking",bookingRouter)
app.use("/dashboard",dashboardRouter)





app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to mongodb")
    } catch (error) {
        console.log(error)
    }
console.log("server is connected to port 8080")
})