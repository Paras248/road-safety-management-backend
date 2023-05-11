const express = require('express');
const Router = express.Router();

const { addReport, getAllReports } = require('../controllers/reportController');

Router.route('/addreport').post(addReport);
Router.route('/getallreports').get(getAllReports);

module.exports = Router;
