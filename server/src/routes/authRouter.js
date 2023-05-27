const authRouter = require('express').Router();

const { signupController, signInController } = require('../controllers');

authRouter.post('/signup', signupController);
authRouter.post('/signIn', signInController);

module.exports = { authRouter };
