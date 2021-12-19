const Joi = require('joi');

exports.uniValidator = Joi.object().keys({
  name: Joi.string().required(),
});

exports.uniIDValidator = Joi.object().keys({
  id: Joi.number().required(),
});

exports.uniPages = Joi.object().keys({
  name: Joi.string(),
  page: Joi.number().default(1),
  perPage: Joi.number().default(2),
});
