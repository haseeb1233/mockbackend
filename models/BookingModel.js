const mongoose=require("mongoose")
   
const BookingSchema=mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
	 flight : { type:mongoose.Schema.Types.ObjectId, ref: 'flights' }
})

const BookingModel=mongoose.model("Bookings",BookingSchema)

module.exports={BookingModel}