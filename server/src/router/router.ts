
import * as URL from "url";
import { IncomingMessage, ServerResponse } from 'http';
import { TResult } from "../type";
const { CREATE_USER, LOGIN_USER } = require('../constants/constants')
const { createUser, getData} = require('../controler/controller');

async function routs(req: IncomingMessage, res: ServerResponse, body: object) {  
    const { method, url } = req;
    const { query, pathname } = URL.parse(<string>url, true);
    let result: TResult;
    let error: TResult;
    switch (true) {
      case method === 'POST' && pathname === CREATE_USER:
          ({ result, error } = await createUser(body));
        break;
      
      case method === 'GET' && pathname === '/seasons':
        ({ result, error }  = await getData());
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
