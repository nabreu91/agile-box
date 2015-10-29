const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

if (!module.parent) {
  const server = app.listen(port, () => {
    console.log('Server listening on port', port);
  });
}

module.exports = app;
