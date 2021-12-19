const pgClient = require('../pgdp');

exports.createStudent = async (name, surname,universityId) => {
  try {
    await pgClient.query(`insert into students(student_name,student_surname, university_id ) values ('${name}','${surname}',${universityId})`);
    return { result: true };
  } catch (e) {
    return { error: e.message };
  }
};

exports.getStudentByUni = async (id,name) => {
  let query = `SELECT * FROM universities
  full outer join students  on universities.id = students.university_id 
  where universities.id = ${id}`;
  if (name) {
    query = query + ` and students.student_name like '%${name}%';`
  } else { 
    query = query + ` ;`
  }
  try {
    const students = await pgClient.query(query);
    return { result: students.rows};
  } catch (e) {
    return { error: e.message };
  }
};

exports.deleteStudent = async (id) => {
    try {
      await pgClient.query(`delete from students where id = ${id};`);
      return { result: true };
    } catch (e) {
      return { error: e.message };
    }
  };

exports.changeStudent = async (id,name,surname,universityId) => {
    try {
      if(name){
        await pgClient.query(`  UPDATE students
        SET student_name = '${name}'
        WHERE id = ${id};`);
      };
      if(surname){
        await pgClient.query(`  UPDATE students
        SET student_surname = '${surname}'
        WHERE id = ${id};`);
      };
      if(universityId){
        await pgClient.query(`  UPDATE students
        SET university_id = '${universityId}'
        WHERE id = ${id};`);
      };
      return { result: true };
    } catch (e) {
      return { error: e.message };
    }
  };

exports.getStudentMarks = async (id) => {
    try {
      const students = await pgClient.query(`SELECT students.id, students.student_name, students.student_surname FROM universities
      full outer join students  on universities.id = students.university_id 
      where universities.id = ${id}
      ;`);
      
      // students.rows.forEach(async (element) => {

      //   await pgClient.query(`select AVG(courses_marks.mark) as mark from courses_marks 
      //   full outer join students on students.id = courses_marks.student_id
      //   where students.id = ${element.id}
      //   order by mark desc;`)?.rows[0];
      // });
     //console.log(students.rows)
      
      return { result: students.rows };
    } catch (e) {
      return { error: e.message };
    }
  };