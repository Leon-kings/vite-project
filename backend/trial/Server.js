const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json

const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
