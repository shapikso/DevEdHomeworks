import Joi from "joi";

exports.userValidator = Joi.object().keys({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  created_at: Joi.date().timestamp('javascript').default(new Date()),
  updated_at: Joi.date().timestamp('javascript').default(new Date())
});

exports.userGetValidator = Joi.object().keys({
  password: Joi.string().required(),
  email: Joi.string().email().required()
});

