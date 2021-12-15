const URL = require('url');
const {CREATE_UNIVER, GET_UNIVER} = require('../constants/constants')
const { createUni,getUni} = require('../controler/controller');


async function routs(req,res,body) {
    console.log(body);
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