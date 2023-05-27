const authRouter = require('express').Router();

const { signupController, signInController, logoutController } = require('../controllers');

authRouter.post('/signup', signupController);
authRouter.post('/signIn', signInController);
authRouter.get('/logout', logoutController);

module.exports = { authRouter };
