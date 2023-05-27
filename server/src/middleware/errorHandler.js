const Jwt = require('jsonwebtoken');
const Joi = require('joi');
const { CustomError } = require('../utils');

const errorHandler = (error, req, res, next) => {
  if (error instanceof Joi.ValidationError) {
    return res.status(400).json({
      data: 'Invalid Input Data',
    });
  }
  if (error instanceof Jwt.JsonWebTokenError) {
    return req.status(401).json({
      data: 'Unauthorized',
    });
  }
  if (error instanceof CustomError) {
    error.status(400).json({
      data: error.message,
    })
  }
  return res.status(500).json({
    data: error,
  });
};

module.exports = { errorHandler };
