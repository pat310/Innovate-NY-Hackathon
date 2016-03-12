'use strict';

let controller = require('./users.controller');
const express = require('express');
const router = express.Router();
module.exports = router;

router.use(controller.ensureAuthenticated);

router.get('/:id/calibrationimage', controller.getCalibrationImage);