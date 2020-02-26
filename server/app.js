const path = require('path');
const fs = require('fs');

const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();
app.use(cors());

app.use(compression({ filter: req => !req.headers['x-no-compression'] }));

const port = 8001;

app.get('/api/products', (req, res) => {
  // toggle this to switch on/off delay for API response
  // sendProductsDataFileOptimized(res);
  sendProductsDataFileSlow(res);
});

app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});

const sendProductsDataFileOptimized = (res) => {
  const filename = path.join(__dirname, 'data', 'products.json');
  res.sendFile(filename);
};

const sendProductsDataFileSlow = async (res) => {
  const filename = path.join(__dirname, 'data', 'products.json');
  const fileSizeBytes = fs.statSync(filename).size;
  const bufferSizeBytes = 16;
  let fileContent = '';
  let currentOffset = 0;

  const fd = fs.openSync(filename, 'r');

  do {
    const buffer = Buffer.alloc(bufferSizeBytes);
    const num = fs.readSync(fd, buffer, 0, bufferSizeBytes, currentOffset);
    fileContent += buffer.toString('utf8', 0, num);
    currentOffset += num;

    // do a slight delay after each iteration
    await new Promise(resolve => setTimeout(resolve, 8));
  } while (currentOffset < fileSizeBytes);

  fs.closeSync(fd);

  res.set('Content-Type', 'application/json; charset=UTF-8');
  res.send(fileContent);
};
