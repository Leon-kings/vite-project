const router = require('express').Router(); 
const User = require('../models/User')

// registration
router.post("/register", async (req,res) =>{
    try{
const newUser = new User({
    username:req.body.username,
    password:req.body.password,
    email:req.body.email,
 

})
const user = await newUser.save();
res.status(200).json()
    }
    catch(err){
        res.status(500).json(err);
    }
})
module.exports = router