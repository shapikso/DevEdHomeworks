const pgClient = require('../pgdp');

exports.createUni = async (name) => {
  try {
    await pgClient.query(`INSERT INTO universities("name") VALUES ('${name}')`);
    return { result: true };
  } catch (e) {
    return { error: e.message };
  }
};

exports.getUniById = async (id) => {
    try {
     const univer = await pgClient.query(`select * from  universities where id ='${id}';`);
      return { result: univer.rows[0] };
    } catch (e) {
      return { error: e.message };
    }
  };

exports.getUniByPatName = async (name) => {
    try {
     const univer = await pgClient.query(`select * from  universities where "name" like '%${name}%';`);
      return { result: univer.rows };
    } catch (e) {
      return { error: e.message };
    }
  };