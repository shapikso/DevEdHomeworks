const validators = require('./validation');
const uniRepository = require('../database/repositories/uni.repositories');

 async function createUser (body)  {
    const { value, error } = validators.validate(body, validators.userValidator);
    if (error) return { error };
    
    console.log(value);
  
    const { error: dbError } = await uniRepository.createUser(value.name,value.surname,value.password,value.email,value.created_at,value.updated_at);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { created: 1 }, status: 201 } };
  };
  
  module.exports = {createUser};