const URL = require('url');
const { getHistory} = require('../controler/controller');


async function routs(req,res,body) {  
    const { method, url } = req;
    const { pathname,query} = URL.parse(url, true);
  
    switch (true) {
      case method === 'GET' && pathname === '/jobs-history':
        ({ result, error } = await getHistory(query));
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