const validators = require('./validation');
const studentRepository = require('../database/repositories/student.repository');
const {splitArr, makeDefault} = require('../helpers/helper')


  async function createStudent (body)  {
    const { value, error } = validators.validate(body, validators.studentValidator);
    if (error) return { error };
    const { error: dbError } = await studentRepository.createStudent(value.name,value.surname,value.universityId);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { created: 1 }, status: 201 } };
  };

  async function getStudentByUniId (body)  {
    const { value, error } = validators.validate(body, validators.studentId);
    if (error) return { error };
    
    const { error: dbError, result } = await studentRepository.getStudentByUni(value.id, value.name);
    if (dbError) return { error: { status: 500, data: { error } } };
    const pages = splitArr(result,value.perPage);
    if(!pages[value.page-1]) return {error: { status: 404, data: 'Not found' }}

    return { result: { data: pages[value.page-1], status: 200 } };
  };

  async function deleteStudent (query)  {
    const { value, error } = validators.validate(query, validators.studentDelId);
    if (error) return { error };
    const { error: dbError } = await studentRepository.deleteStudent(value.id);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { deleted: 1 }, status: 201 } };
  };

  async function changeStudent (body)  {
    const { value, error } = validators.validate(body, validators.studentChangeValidator);
    if (error) return { error };
    const { error: dbError } = await studentRepository.changeStudent(value.id,value.name,value.surname,value.universityId);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { changed: 1 }, status: 201 } };
  };

  async function getStudentMarksByUni (id)  {
    const { value, error } = validators.validate(id, validators. UniId);
    if (error) return { error };
    const { error: dbError, result } = await studentRepository.getStudentMarks(value);
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: result, status: 201 } };
  };
 
  module.exports = { createStudent,getStudentByUniId,deleteStudent,changeStudent,getStudentMarksByUni };