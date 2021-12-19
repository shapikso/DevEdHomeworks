const validators = require('./validation');
const teacherRepository = require('../database/repositories/teacher.repository');
const {splitArr} = require('../helpers/helper')


  async function createTeacher (body)  {
    const { value, error } = validators.validate(body, validators.teacherValidator);
    if (error) return { error };
    const { error: dbError } = await teacherRepository.createTeacher(value.name,value.surname,value.universityId);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { created: 1 }, status: 201 } };
  };

  async function getTeacherByUniId (body)  {

    const { value, error } = validators.validate(body, validators.teacherId);
    if (error) return { error };
    
    const { error: dbError, result } = await teacherRepository.getTeacherByUni(value.id, value.name);
    if (dbError) return { error: { status: 500, data: { error } } };
    const pages = splitArr(result,value.perPage);
    if(!pages[value.page-1]) return {error: { status: 404, data: 'Not found' }}

    return { result: { data: pages[value.page-1], status: 200 } };
  };

  module.exports = {createTeacher,getTeacherByUniId};