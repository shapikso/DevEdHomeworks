const pgClient = require('../pgdp');

exports.createCourse = async (name,teacherId) => {
  try {
    await pgClient.query(`INSERT INTO courses("name",teacher_id )
    VALUES ('${name}',${teacherId});`);
    return { result: true };
  } catch (e) {
    return { error: e.message };
  }
};

exports.getCourseByUni = async (id,name) => {
  let query = `select user_un."name", user_un.surname , universities."name", courses."name" FROM universities
  full outer join user_un  on universities.id = user_un.university_id 
  full outer join courses  on user_un.id = courses.teacher_id 
  where  universities.id = ${id}`;
  if (name) {
    query = query + ` and courses."name" like '%${name}%' ;`
  } else { 
    query = query + ` ;`
  }
  try {
    const course = await pgClient.query(query);
    return { result: course.rows};
  } catch (e) {
    return { error: e.message };
  }
}

exports.deleteCourse = async (id) => {
    try {
      await pgClient.query(`delete from courses_marks where course_id = ${id};`)
      await pgClient.query(`delete from courses where id = ${id};`);
      return { result: true };
    } catch (e) {
      return { error: e.message };
    }
  };

exports.showUserByCourse = async (id) => {
    try {
        const course = await pgClient.query(`select distinct students.student_name,students.student_surname , courses."name"   from courses_marks 
      full outer join students on students.id = courses_marks.student_id
      full outer join courses on courses.id = courses_marks.course_id
      where courses.id = ${id};`);
      return { result: course.rows };
    } catch (e) {
      return { error: e.message };
    }
};

exports.showUserByCourse = async (id) => {
    try {
        const course = await pgClient.query(`select distinct students.student_name,students.student_surname , courses."name"   from courses_marks 
      full outer join students on students.id = courses_marks.student_id
      full outer join courses on courses.id = courses_marks.course_id
      where courses.id = ${id};`);
      return { result: course.rows };
    } catch (e) {
      return { error: e.message };
    }
};

exports.showAVGMarkByCourse = async (id, best) => {
    try {
        const course = await pgClient.query(`select distinct students.student_name,students.student_surname,AVG(courses_marks.mark) as mark, courses."name"   from courses_marks 
        full outer join students on students.id = courses_marks.student_id
        full outer join courses on courses.id = courses_marks.course_id
        where courses_marks.mark > 0 and courses.id = ${id}
        GROUP BY students.student_name,students.student_surname,courses."name"
        order by mark desc;`);
      return { result: course.rows.slice(0,best) };
    } catch (e) {
      return { error: e.message };
    }
};

exports.delStudentFromCourse = async (id) => {
    try {
      await pgClient.query(`delete from courses_marks where student_id = ${id};`);
      return { result: true };
    } catch (e) {
      return { error: e.message };
    }
}

