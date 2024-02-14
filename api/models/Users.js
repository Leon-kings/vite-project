const mongoose = require("mongoose")


       const UserSchema = new mongoose.Schema({
        username:{
            type:String,
            required:true,
            unique:true,
        },
        email:{
            type:String,
            require:true,
            unique:true,
        },
        password:{
            type:String,
            require:true,
            unique:true,
        },
        fullname:{
            type:String,
            required:true,
            unique:true,
        },
        tel:{
            type:String,
            required:true,
            unique:true,
        },
       },
       {timestamps: true} 
       );
                     module.exports = mongoose.model("User", UserSchema);