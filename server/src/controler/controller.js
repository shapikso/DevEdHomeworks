const validators = require('./validation');
const uniRepository = require('../database/repositories/uni.repositories');

 async function createUni (body)  {
    const { value, error } = validators.validate(body, validators.uniValidator);
    if (error) return { error };
  
    const { error: dbError } = await uniRepository.createUni(value.name);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { created: 1 }, status: 201 } };
  };

  async function getUni (query)  {
    const { value, error } = validators.validate(query, validators.uniIDValidator);
    if (error) return { error };
  
    const { error: dbError, result } = await uniRepository.getUniById(value.id);

    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: result, status: 200 } };
  };
  
  module.exports = {createUni,getUni};