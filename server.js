const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'dist' directory instead of 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Send the index.html file for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
// Correct the port setting here to use the 'port' variable directly
app.listen(port, function () {
  console.log('Server has started! http://localhost:' + port + '/');
});