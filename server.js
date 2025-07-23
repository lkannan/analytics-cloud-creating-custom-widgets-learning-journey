// server.js
const express = require('express');
const app = express();
const port = 3000;

// Enable CORS for SAP Analytics Cloud
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve static files
app.use(express.static('./'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
