const validators = require('./validation');
const courseRepository = require('../database/repositories/course.repository');
const {splitArr} = require('../helpers/helper')


  async function createCouse (body)  {
    const { value, error } = validators.validate(body, validators.courseValidator);
    if (error) return { error };
    const { error: dbError } = await courseRepository.createCourse(value.name,value.teacherId);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { created: 1 }, status: 201 } };
  };

  async function getCourseByUniId (body)  {


    const { value, error } = validators.validate(body, validators.courseId);
    if (error) return { error };
    
    const { error: dbError, result } = await courseRepository.getCourseByUni(value.id, value.name);
    if (dbError) return { error: { status: 500, data: { error } } };

    const pages = splitArr(result,value.perPage);
    if(!pages[value.page-1]) return {error: { status: 404, data: 'Not found' }}

    return { result: { data: pages[value.page-1], status: 200 } };
  };

  async function deleteCourse (query)  {
    const { value, error } = validators.validate(query, validators.courseDelId);
    if (error) return { error };
    const { error: dbError } = await courseRepository.deleteCourse(value.id);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { deleted: 1 }, status: 201 } };
  };

  async function getUserByCourse (body)  {

    const { value, error } = validators.validate(body, validators.courseId);
    if (error) return { error };
    const { error: dbError, result } = await courseRepository.showUserByCourse(value.id);

    const pages = splitArr(result,value.perPage);
    if(!pages[value.page-1]) return {error: { status: 404, data: 'Not found' }}
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: pages[value.page-1], status: 201 } };
  };

  // async function getAVGMarkByCourse (body)  {

  //   const { value, error } = validators.validate(body, validators.courseBests);
  //   if (error) return { error };
  //   const { error: dbError, result } = await courseRepository.showAVGMarkByCourse(value.id,value.best);
  
  //   if (dbError) return { error: { status: 500, data: { error } } };
  //   return { result: { data: result, status: 201 } };
  // };

  async function getAVGMarkByCourse (body)  {

    const { value, error } = validators.validate(body, validators.courseBests);
    if (error) return { error };
    const { error: dbError, result } = await courseRepository.showAVGMarkByCourse(value.id,value.best);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: result, status: 201 } };
  };

  async function delStudentFromCourse (query)  {

    const { value, error } = validators.validate(query, validators.courseDelId);
    if (error) return { error };
    const { error: dbError } = await courseRepository.delStudentFromCourse(value.id);
  
    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: {deleted: 1 }, status: 201 } };
  };


  module.exports = {createCouse,getCourseByUniId,deleteCourse,getUserByCourse,getAVGMarkByCourse,delStudentFromCourse};