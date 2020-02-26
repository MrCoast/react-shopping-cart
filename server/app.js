const path = require('path');

const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();
app.use(cors());

// uncomment this to enable HTTP gzip compression
// app.use(compression({ filter: req => !req.headers['x-no-compression'] }));

const port = 8001;

app.get('/api/products', (req, res) => {
  // toggle this to switch on/off delay for API response
  setTimeout(() => res.sendFile(path.join(__dirname, 'data', 'products.json')), 3000);
  // res.sendFile(path.join(__dirname, 'data', 'products.json'));
});

app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
