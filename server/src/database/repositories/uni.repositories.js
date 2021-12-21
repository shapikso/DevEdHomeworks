const pgClient = require('../pgdp');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

exports.getUser = async (email,password) => {
  try {
    let token;
    const res = await pgClient.query(`select email, "password" from users
    where email = '${email}';`);
    console.log(res.rows);
    if(await bcrypt.compare(password, res.rows[0].password)){
    token = jwt.sign(email, 't3478tipr4jey7gurhe');
  }    
    return { result: token };
  } catch (e) {
    return { error: e.message };
  }
};