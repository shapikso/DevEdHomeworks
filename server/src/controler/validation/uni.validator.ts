import Joi from "joi";

export const matchesValidation = Joi.object().keys({
  seasonId: Joi.number().required()
});

export const matchValidation = Joi.object().keys({
  matchId: Joi.number().required()
});
