const mongoose= require('mongoose')
const Schema= mongoose.Schema;

const BookingSchema=new Schema({
    username:{
        type:String,
    },
    depatureDate:{
        type: Date,
    },
    depatureTime:{
        type: String,
    },
    returnDate:{
        type:Date,
    },
    returnTime:{
        type:String,
    },
    destinationFrom:{
        type:String,
    },
    destinationTo:{
        type: String,
    },
    seatNoBooking:{
        type: Number,
    },
    price:{
        type:Number,
    }
})

module.exports=mongoose.model("Booking",BookingSchema)