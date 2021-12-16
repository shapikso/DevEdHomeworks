const validators = require('./validation');
const uniRepository = require('../database/repositories/uni.repositories');

 async function createUser (body)  {
    const { value, error } = validators.validate(body, validators.userValidator);
    if (error) return { error };
    
    
  
    const { error: dbError } = await uniRepository.createUser(value.name,value.surname,value.email,value.phone,value.adress);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { created: 1 }, status: 201 } };
  };
  
  module.exports = {createUser};