require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const report = require('./routes/report');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', report);

module.exports = app;
