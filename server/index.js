const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist/index.html')));

app.get('/', (req, res) => {
  res.send('happy potato');
});

app.listen(3000, () => {
  console.log('Listening on PORT: 3000');
});
