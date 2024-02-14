const express = require('express')
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authoRoute = require('./routes/auth')
    dotenv.config();
    app.use(express.json())
                mongoose.connect( process.env.MONGO_URL ,
                {
                    useNewParser: true ,
                    useUnifiedTopology:true,
                  
                }).then(console.log('Connected to MONGODB')).catch(err =>
                    {
                         console.log(err);
                        });
        
app.use("/api/routes/auth", authoRoute)

      

app.listen('8000',()=>{
    console.log("Backend is running");
})