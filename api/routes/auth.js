const router = require('express').Router(); 
const User = require('../models/Users')

// registration
router.post("/register", async (req,res) =>{
    try{
const newUser = new Users({
    username:req.body.username,
    password:req.body.password,
    email:req.body.email,
    tel:req.body.tel,
    fullname:req.body.fullname

})
const User = await newUser.save();
res.status(200).json()
    }
    catch(err){
        res.status(500).json(err);
    }
})
module.exports = router