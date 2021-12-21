const pgClient = require('../pgdp');

exports.createUser = async (name,surname,password,email,createdAt,updatedAt) => {
  try {
    const res = await pgClient.query(`INSERT INTO users ("name",surname,"password",email,created_at,updated_at)
    values('${name}','${surname}','${password}','${email}', '${createdAt}', '${updatedAt}');`);
    console.log(res)
    return { result: true };
  } catch (e) {
    return { error: e.message };
  }
};