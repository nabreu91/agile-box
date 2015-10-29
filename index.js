const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('node-uuid');
const app = express();

const comments = [];

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api/comments', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.json(comments);
});

app.post('/api/comments', (req, res) => {
  const comment = req.body;
  comment.id = uuid.v4();
  comments.push(comment);

  res.setHeader('Cache-Control', 'no-cache');
  res.json(comment);
});

if (!module.parent) {
  const server = app.listen(port, () => {
    console.log('Server listening on port', port);
  });
}

module.exports = app;
