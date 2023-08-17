const Joi = require('joi');

const user = Joi.object({
  Id: Joi.number().integer().required(),
  userName: Joi.string().required(),
  accountNumber: Joi.number().integer().required(),
  emailAddress: Joi.string().email().required(),
  identityNumber: Joi.number().integer().required(),
});

module.exports = {
  user
};