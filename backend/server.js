
import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.listen(8000)
