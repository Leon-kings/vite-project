const express = require('express');
const path = require('path');
const app = express();

app.get('/download', (req, res) => {
  // Specify the file path (this could also be dynamic)
  const filePath = path.join(__dirname, 'path/to/your/file.txt');
  // Set the filename that the user will see
  const fileName = 'downloadedFile.txt';
  // Trigger the download on the client side
  res.download(filePath, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
});

