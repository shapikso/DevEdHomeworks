const Joi = require('joi');

exports.studentValidator = Joi.object().keys({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  universityId: Joi.number().required(),
});

exports.studentId = Joi.object().keys({
  id: Joi.number().required(),
  name: Joi.string(),
  page: Joi.number().default(1),
  perPage: Joi.number().default(2),
});

exports.studentDelId = Joi.object().keys({
  id: Joi.number().required(),
});

exports.studentChangeValidator = Joi.object().keys({
  id: Joi.number().required(),
  name: Joi.string(),
  surname: Joi.string(),
  universityId: Joi.number(),
});

exports.UniId = Joi.number().required();