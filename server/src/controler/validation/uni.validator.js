const Joi = require('joi');

exports.uniValidator = Joi.object().keys({
  name: Joi.string().required(),
});

exports.uniIDValidator = Joi.object().keys({
  id: Joi.number().required(),
});

exports.uniPages = Joi.object().keys({
  name: Joi.string().required(),
  page: Joi.number().required(),
  perPage: Joi.number().required(),
});
