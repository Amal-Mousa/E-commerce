const bcrypt = require('bcrypt');
const { getUserByEmailQuery } = require('../../database');
const { signInSchema } = require('../../validation');
const { signToken, CustomError } = require('../../utils');

const signInController = (req, res, next) => {
  const { email, password } = req.body;

  signInSchema.validateAsync({ email, password }, { abortEarly: false })
    .then(({ email: userEmail }) => getUserByEmailQuery(userEmail))
    .then(({ rowCount, rows }) => {
      if (rowCount === 0) throw new CustomError(400, 'Invalid Email or Password');
      // eslint-disable-next-line prefer-destructuring
      req.userInfo = rows[0];
      return bcrypt.compare(password, rows[0].password);
    })
    .then((isMatched) => {
      if (!isMatched) throw new CustomError('400', 'Invalid Email or Password');
    })
    .then(() => {
      const { username, email: userEmail, password: userPassword } = req.userInfo;
      return signToken({ username, userEmail, userPassword });
    })
    .then((token) => {
      res.cookie('token', token).json({
        data: {
          message: 'User Logged in Successfully',
          info: req.userInfo,
        },
      });
    })
    .catch((error) => next(error));
};

module.exports = { signInController };
