'use strict';

let controller = require('./medications.controller');
const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/', controller.getAll);
router.get('/:category', controller.getByUse);
router.get('/details/:id', controller.getById);