const url = require('url');

function routs(req,res,body) {
    console.log(body);
    const query = url.parse(req.url,true)
    console.log(body);
    switch(true) {
      case query.pathname === '/' :
        result = JSON.stringify([
          {"id": 3,
            "name": "Ivan",
            "role": "Student"
         },
         {"id": 4,
         "name": "Kirill",
         "role": "Student"
      },
      {"id": 5,
      "name": "Max",
      "role": "Student"
      }
        ]);
        console.log(result);
        res.end(result);
        break;
    }
}

module.exports = routs