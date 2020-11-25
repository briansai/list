const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  console.log('happy potato');
  res.send({ text: 'happy potato ' });
});

app.listen(3000, () => {
  console.log('Listening on PORT: 3000');
});
