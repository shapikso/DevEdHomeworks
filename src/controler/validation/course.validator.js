const Joi = require('joi');

exports.courseValidator = Joi.object().keys({
  name: Joi.string().required(),
  teacherId: Joi.number().required(),
});

exports.courseId = Joi.object().keys({
  id: Joi.number().required(),
  name: Joi.string(),
  page: Joi.number().default(1),
  perPage: Joi.number().default(2),
});

exports.courseDelId = Joi.object().keys({
    id: Joi.number().required(),
  });

exports.courseBests = Joi.object().keys({
    id: Joi.number().required(),
    best: Joi.number().required(),
  });