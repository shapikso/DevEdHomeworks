const validators = require('./validation');
const uniRepository = require('../database/repositories/uni.repositories');
const bcrypt = require('bcryptjs');

 async function createUser (body)  {
    const { value, error } = validators.validate(body, validators.userValidator);
    if (error) return { error };
    
    const hash = bcrypt.hashSync(value.password, 12);
  
    const { error: dbError } = await uniRepository.createUser(value.name,value.surname,hash,value.email,value.created_at,value.updated_at);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { created: 1 }, status: 201 } };
  };

async function getUser (body)  {
    const { value, error } = validators.validate(body, validators.userGetValidator);
    if (error) return { error };
    
    //const hash = bcrypt.hashSync(value.password, 12);
  
    const { error: dbError, result } = await uniRepository.getUser(value.email,value.password);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: result, status: 200 } };
  };
  
  module.exports = {createUser,getUser};