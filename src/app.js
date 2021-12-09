const http = require('http');
const url = require('url'); // 1 - Import Node.js core module
require('./pgdp.js')
const router = require('./router')
const server = http.createServer(function (req, res) { 
  const buffer = [];  // 2 - creating server
  let result;
//   if(query.pathname === '/'){
//     res.writeHead(200, {'Content-type':'text/plain'});
//     res.write('Hello, I am a webserver !');
//     res.end();
// }else {
//     res.writeHead(404, {'Content-type':'text/plain'});
//     res.end();
// };
  req.on('data', (chunk) => {
    buffer.push(chunk);
  })

  
  req.on('end',async () =>{ 
    //console.log(query);
    if(!buffer.length>0){
      res.end({})
    }
    const result = await router(req,res,JSON.parse(buffer));
    res.end(JSON.stringify);
  })
    
  })
 // console.log(res);

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..');