const authRouter = require('express').Router();

const { signupController } = require('../controllers');

authRouter.post('/signup', signupController);

module.exports = { authRouter };
