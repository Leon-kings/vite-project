const express = require("express")
// import { express } from "express"
const app = express()
const path =require("path")
const hbs = require('hbs')
const tampletePath = path.join(__dirname,"./src/form")



app.use(express.json())
app.set("view engine","hbs")
app.set("views",tampletePath)

app.get('/',(req,res)=>{
    res.render("login/Login")
})

z
app.get('/sign up',(req,res)=>{
    res.render("register/Register")
})



app.listen(8000,()=>{
    console.log('Port connected')
})