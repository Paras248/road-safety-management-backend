const bigPromise = require('../middlewares/bigPromise');
const Report = require('../models/report');
const mongoose = require('mongoose');

exports.addReport = bigPromise(async (req, res, next) => {
    const { tag, description, lat, long } = req.body;
    if (!tag || !description || !lat || !long) {
        return res.status(400).json({
            success: false,
            message: 'Please provide all the fields',
        });
    }
    const report = await Report.create({
        tag,
        description,
        lat,
        long,
    });

    res.status(201).json({
        success: true,
        report,
    });
});

exports.getAllReports = bigPromise(async (req, res, next) => {
    const reports = await Report.find();
    if (!reports) {
        return res.status(400).json({
            success: false,
            message: 'No reports found',
        });
    }
    res.status(200).json({
        success: true,
        reports,
    });
});
