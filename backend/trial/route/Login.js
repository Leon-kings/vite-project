app.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
  
      if (user && await bcrypt.compare(password, user.password)) {
        // Generate a token (assuming you have a function to do so)
        const token = generateToken(user._id);
        res.json({ message: 'Login successful', token });
      } else {
        res.status(400).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error logging in' });
    }
  });
  