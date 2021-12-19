const Joi = require('joi');

exports.teacherValidator = Joi.object().keys({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  universityId: Joi.number().required(),
});

exports.teacherId = Joi.object().keys({
  id: Joi.number().required(),
  name: Joi.string(),
  page: Joi.number().default(1),
  perPage: Joi.number().default(2),
});

