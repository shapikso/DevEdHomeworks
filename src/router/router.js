const URL = require('url');
const {CREATE_UNIVER, GET_UNIVER} = require('../constants/constants')
const { createUni,getUni,getUniPages,getAllUniverWithStudents } = require('../controler/uni.controller');
const { createTeacher, getTeacherByUniId } = require('../controler/teacher.controller');
const { createCouse,getCourseByUniId,deleteCourse, getUserByCourse, getAVGMarkByCourse, delStudentFromCourse } = require('../controler/course.controller');
const { createStudent,getStudentByUniId,deleteStudent,changeStudent, getStudentMarksByUni } = require('../controler/student.controller');


async function routs(req,res,body) {
    let result, error;
    const { method, url } = req;
    const { query, pathname } = URL.parse(url, true);
  
    switch (true) {
      case method === 'POST' && pathname === CREATE_UNIVER:
          ({ result, error } = await createUni(body));
          break;

      case method === 'GET' && pathname === GET_UNIVER:
          ({ result, error } = await getUni(query));
          break;

      case method === 'GET' && pathname === '/get-uni-pages':
          ({ result, error } = await getUniPages(body));
          break;
      
      case method === 'POST' && pathname === '/create-teacher':
          ({ result, error } = await createTeacher(body));
          break;

      case method === 'GET' && pathname === '/get-teacher-by-uni':
          ({ result, error } = await getTeacherByUniId(body));
          break;

      case method === 'POST' && pathname === '/create-course':
          ({ result, error } = await createCouse(body));
          break;

      case method === 'GET' && pathname === '/get-course-by-uni':
          ({ result, error } = await getCourseByUniId(body));
          break;

      case method === 'DELETE' && pathname === '/delete-course':
          ({ result, error } = await deleteCourse(query));
          break;

      case method === 'POST' && pathname === '/create-student':
          ({ result, error } = await createStudent(body));
          break;

      case method === 'GET' && pathname === '/get-student-by-uni':
          ({ result, error } = await getStudentByUniId(body));
          break;
      
      case method === 'DELETE' && pathname === '/delete-student':
          ({ result, error } = await deleteStudent(query));
          break;

      case method === 'GET' && pathname === '/get-students-by-course':
          ({ result, error } = await getUserByCourse(body));
          break;

      case method === 'GET' && pathname === '/get-students-marks-by-course':
          ({ result, error } = await getAVGMarkByCourse(body));
          break;
          
      case method === 'DELETE' && pathname === '/delete-student-from-course':
          ({ result, error } = await delStudentFromCourse(query));
          break;
        
      case method === 'PUT' && pathname === '/change-student':
          ({ result, error } = await changeStudent(body));
          break;

    //   case method === 'GET' && pathname === '/uni-students':
    //     ({ result, error } = await getAllUniverWithStudents());
    //       if(!error){
    //         let res
    //        await (result.data.forEach(async (element) => {
    //            res = (await getStudentMarksByUni(element.id)).result.data;
    //         })); 
    //         console.log(res)
    //       }
        //   break;
      default:
        res.statusCode = 404;
        return res.end(JSON.stringify({ error: 'Route Not Found' }));
    }

    if (error) {
      res.statusCode = error.status;
      return res.end(JSON.stringify({ error }));
    }
    res.statusCode = result.status;
    res.end(JSON.stringify(result.data));
}

module.exports = { routs };

function params(id) {

  return
}