const pgClient = require('../pgdp');

exports.createUser = async (name,surname,email,phone,adress) => {
  try {
    await pgClient.query(`INSERT INTO users("name",surname,email,phone,adress) 
    VALUES ('${name}', '${surname}','${email}','${phone}','${adress}')`);
    return { result: true };
  } catch (e) {
    return { error: e.message };
  }
};