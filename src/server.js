const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://admin:adminapi@cluster0-whfh5.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true,
});

app.use(cors());

app.use(express.json());

app.use(require('./routes'));

app.listen(3333)

// admin || adminapi