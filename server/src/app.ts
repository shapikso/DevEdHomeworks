import { createServer, IncomingMessage, ServerResponse } from 'http';
const {routs} = require('./router/router')
const server = createServer(function (req: IncomingMessage, res: ServerResponse) { 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === "OPTIONS") { 
    res.statusCode = 200; 
    return res.end(); 
  }

  const buffer: Buffer[] = [];
  req.on('data', (chunk) => {
    buffer.push(chunk);
  })
  
  req.on('end',async () => { 
     const body: object = buffer.length ? JSON.parse(buffer.toString()) : null;
     routs(req,res,body);
  })
  })

server.listen(5000);

console.log('Node.js web server at port 5000 is running..');