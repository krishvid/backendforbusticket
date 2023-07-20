const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const Schema=mongoose.Schema;

const userSchema= new Schema ({
    fName:{
        type:String,
    },
    lName:{
        type:String,
    },
    username:{
        type:String,
    },
    password:{
        type:String,
    },
     Role:{
        type: String,
        enum: ['Admin','User'],
      },
      

},{timestamps: true});

module.exports= mongoose.model("User", userSchema)
