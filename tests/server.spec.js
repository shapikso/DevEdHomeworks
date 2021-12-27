const request = require('supertest');
require("babel-core/register");
require("babel-polyfill");
const server = require('../server/src/app').server;

describe("server testing", () => {
  
  it('should return 404',  (done) => {
    request(server)
    .get('/123')
    .expect(404)
    .end(done);
  });

  it('should return 500',  (done) => {
    request(server)
    .get('/db-error')
    .expect(500)
    .end(done);
  });

  it('should return 200',  (done) => {
    request(server)
    .post('/factorial')
    .send({
      type : "recursion",
      number: 4})
    .expect(200)
    .expect(function(res) {
      res.body.fact = 120;
      res.body.time;
    })
    .end(done);
  });
});
