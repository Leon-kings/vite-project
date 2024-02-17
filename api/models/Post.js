const mongoose = require("mongoose")


       const PostSchema = new mongoose.Schema({
        tiltle:{
            type:String,
            required:true,
            unique:true,
        },
       desc:{
            type:String,
            require:true,
            unique:true,
        },
        photo:{
            type:String,
            require:true,
            unique:true,
        },
       username:{
            type:String,
            required:true,
            unique:true,
        },
        category:{
            type:Array,
            
            required:true,
        }

       },
       {timestamps: true} 
       );
                     module.exports = mongoose.model("Post", PostSchema);