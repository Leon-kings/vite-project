const mongoose = requuire('mongoose')

mongoose.connect("mongodb://localhost:27017/users")
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('not connected')
})


const LoginSchema =new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection =new mongoose.model("Collection1",LoginSchema)
module.exports= collection