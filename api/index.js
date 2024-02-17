// const express = require('express')
// const app = express()
// const dotenv = require("dotenv")
// const mongoose = require("mongoose")
// const authoRoute = require('./routes/auth')
//     dotenv.config();
//     app.use(express.json())
//                 mongoose.connect( process.env.MONGO_URL ,
//                 {
//                     useNewParser: true ,
//                     useUnifiedTopology:true,
                  
//                 }).then(console.log('Connected to MONGODB')).catch(err =>
//                     {
//                          console.log(err);
//                         });
        
// app.use("/api/routes/auth", authoRoute)

      

// app.listen('8000',()=>{
//     console.log("Backend is running");
// })

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json()); // for parsing application/json

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define User model
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// Routes
app.post('/register', async (req, res) => {
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // Create a new user
    const user = await User.create({
      username: req.body.username,
      password: hashedPassword
    });
    res.status(201).send('User created');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } else {
    res.status(400).send('Invalid Credentials');
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
