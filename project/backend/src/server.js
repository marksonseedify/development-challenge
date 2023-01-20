const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routesLinks = require('./routes/links');
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/url-shortener', { useNewUrlParser: true });

app.use(bodyParser.json());
app.use('/api/links/', routesLinks);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
