const Joi = require('joi');

exports.jobsValidate = Joi.object().keys({
  country: Joi.string().required(),
  type: Joi.string().required(),
});

