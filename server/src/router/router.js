const URL = require('url');
const {CREATE_USER,LOGIN_USER} = require('../constants/constants')
const { createUser,getUser} = require('../controler/controller');


async function routs(req,res,body) {  
    const { method, url } = req;
    const { query, pathname } = URL.parse(url, true);
  
    switch (true) {
      case method === 'POST' && pathname === CREATE_USER:
        ({ result, error } = await createUser(body));
        break;
      
      case method === 'GET' && pathname === LOGIN_USER:
        ({ result, error } = await getUser(body));
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