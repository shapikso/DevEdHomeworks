const Joi = require('joi');

exports.userValidator = Joi.object().keys({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  adress: Joi.string().required()
});

