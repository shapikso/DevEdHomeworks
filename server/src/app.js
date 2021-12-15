const http = require('http');
 // 1 - Import Node.js core module
require('./database/pgdp.js')
const {routs} = require('./router/router')
const server = http.createServer(function (req, res) { 
  const buffer = [];
  req.on('data', (chunk) => {
    buffer.push(chunk);
  })
  
  req.on('end',async () =>{ 
    const body = buffer.length ? JSON.parse(buffer) : null;
    const result = await routs(req,res,body );
    res.end(JSON.stringify(result));
  })
    
  })

server.listen(5000);

console.log('Node.js web server at port 5000 is running..');