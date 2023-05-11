const express = require('express');
const Router = express.Router();

const { addReport } = require('../controllers/reportController');

Router.route('/addreport').post(addReport);

module.exports = Router;
