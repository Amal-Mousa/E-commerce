const router = require('express').Router();

const { experimentalController } = require('../controllers');

router.get('/', experimentalController);

module.exports = { router };
