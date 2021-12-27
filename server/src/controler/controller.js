const validators = require('./validation');
const uniRepository = require('../database/repositories/uni.repositories');

 async function findFactorial (body)  {
    const { value, error } = validators.validate(body, validators.factorialValidate);
    if (error) return { error, result };
  
    const  fact  = uniRepository.findFactorial(value.type, value.number);
    return { result: { data: fact, status: 200 } };
  };

async function getError ()  {
    const { error: dbError, result } = await uniRepository.getError();
    if (dbError) return { error: { status: 500, ...dbError  } };
    return { result: { data: result, status: 200 } };
  };
  
  module.exports = {findFactorial,getError};