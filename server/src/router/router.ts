
import * as URL from "url";
import { IncomingMessage, ServerResponse } from 'http';
import { TResult } from "../type";
const { getSeasonsData, getMatches, getMatch } = require('../controler/controller');

async function routs(req: IncomingMessage, res: ServerResponse, body: object) {  
    const { method, url } = req;
    const { query, pathname } = URL.parse(<string>url, true);
    let result: TResult;
    let error: TResult;
    switch (true) {
      case method === 'GET' && pathname === '/seasons':
        ({ result, error }  = await getSeasonsData());
        break;

      case method === 'GET' && pathname === '/matches':
        ({ result, error }  = await getMatches(query));
        break;

      case method === 'GET' && pathname === '/match':
        ({ result, error }  = await getMatch(query));
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
