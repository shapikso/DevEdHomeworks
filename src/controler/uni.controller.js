const validators = require('./validation');
const uniRepository = require('../database/repositories/uni.repositories');
const {splitArr} = require('../helpers/helper')

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

  async function getUniPages (body)  {
    const { value, error } = validators.validate(body, validators.uniPages);
    if (error) return { error };

    const { error: dbError, result } = await uniRepository.getUniByPatName(value.name);
    if (dbError) return { error: { status: 500, data: { error } } };

    const pages = splitArr(result,value.perPage);
    if(!pages[value.page-1]) return {error: { status: 404, data: 'Not found' }}

    return { result: { data: pages[value.page-1], status: 200 } };
  };

  async function getAllUniverWithStudents ()  {

    const { error: dbError, result } = await uniRepository.getUnis();
    if (dbError) return { error: { status: 500, data: { error } } };

    result.forEach(element => {
      element.result = [];
    })

    return { result: { data: result, status: 200 } };
  };

  
  module.exports = {createUni,getUni,getUniPages,getAllUniverWithStudents};