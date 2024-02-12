const express = require("express");
const { Login } = require("../controllers/user");
const ApiRateLimiter = require("../middleware/attempts");

const router = express.Router();
router.post("/login", ApiRateLimiter, LoginController);
module.exports = router;
exports.Login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    // Username not found
    return res.status(401).json({ message: 'Invalid user' });
  }

  const isMatch = await User.comparePassword(req.body.password);
  if (!isMatch) {
    // Incorrect password
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = user.generateAuthToken();
  
  // Increments the login count for the user
  await user.incrementLoginCount();

  res.cookie('token', token, { httpOnly: true, sameSite: 'strict', secure: false }); // secure true to allow https only

  res.json({ message: "Login Success", status: 1 })
}