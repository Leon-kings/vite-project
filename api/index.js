const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authoRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/category');
const multer = require('multer')
    dotenv.config();
    app.use(express.json())
    // connection
                mongoose.connect( process.env.MONGO_URL )
                .then(console.log('Connected to MONGDB'))
                .catch(err =>
                    {
                         console.log(err);
                        });
// connection end
// image store
                        const storage = multer.diskStorage({
                            destination:(req,file,cb) =>{
                                cb(null,"images")
                            },filename:(req,file,cb)=>{
                                cb(req.body.name)
                            }
                        })
                        // image store ends
         // image upload
      const upload = multer({ storage:storage });
      app.post("/upload" , upload.single("file"),(req,res)=>{
        res.status(200).json("File has been uploaded");
      })
        // image upload ends
    //  routing
app.use("/auth", authoRoute)
app.use("/users", userRoute)
app.use("/posts", postRoute)
app.use("/category", categoryRoute)      
// app listening
app.listen('8000',()=>{
    console.log("Backend is running");
})

