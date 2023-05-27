const bcrypt = require('bcrypt');

const { getUserByEmailQuery, signupQuery } = require('../../database');
const { signToken, CustomError } = require('../../utils');
const { signupSchema } = require('../../validation');

const signupController = (req, res, next) => {
  const { username, email, password } = req.body;

  signupSchema.validateAsync({ username, email, password }, { abortEarly: false })
    .then((userData) => getUserByEmailQuery(userData.email))
    .then((results) => {
      if (results.rowCount > 0) {
        throw new CustomError(401, 'Email is already Exist');
      }
    })
    .then(() => bcrypt.hash(password, 12))
    .then((hash) => ({ username, email, password: hash }))
    .then((userData) => signupQuery(userData))
    .then(({ rows }) => rows[0])
    .then((tokenData) => (signToken({ id: tokenData.id, username: tokenData.username })))
    .then((token) => {
      res.cookie('token', token)
        .json({
          message: 'User signup Successfully',
          rows: res.userData,
        });
    })
    .catch((error) => next(error));
};

module.exports = { signupController };
