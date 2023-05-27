const Joi = require('joi');

const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
});

module.exports = { signInSchema };
