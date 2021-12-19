const pgClient = require('../pgdp');

exports.createTeacher = async (name, surname,universityId) => {
  try {
    await pgClient.query(`INSERT INTO user_un("name",surname,"role",university_id) VALUES ('${name}','${surname}','учитель',${universityId})`);
    return { result: true };
  } catch (e) {
    return { error: e.message };
  }
};

exports.getTeacherByUni = async (id,name) => {
  let query = `SELECT * FROM universities
  full outer join user_un  on universities.id = user_un.university_id 
  where "role" = 'учитель' and universities.id = ${id}`;
  if (name) {
    query = query + ` and user_un."name" like '%${name}%';`
  } else { 
    query = query + ` ;`
  }
  try {
    const teacher = await pgClient.query(query);
    return { result: teacher.rows};
  } catch (e) {
    return { error: e.message };
  }
};