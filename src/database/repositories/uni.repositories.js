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
  let query = `select * from  universities`;
  if (name) {
    query = query + ` where "name" like '%${name}%';`
  } else { 
    query = query + ` ;`
  }
    try {
     const univer = await pgClient.query(query);
      return { result: univer.rows };
    } catch (e) {
      return { error: e.message };
    }
  };

exports.getUnis = async () => {
    try {
     const univer = await pgClient.query(`select id, "name" from  universities;`);
      return { result: univer.rows };
    } catch (e) {
      return { error: e.message };
    }
  };