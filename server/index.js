require('dotenv').config();
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const db = require('./db');
const router = require('./routes');
const port = process.env.PORT;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.use('/api', router);

app.listen( port, () => {
  console.log(`Server is listening on Port: ${port}`)
})