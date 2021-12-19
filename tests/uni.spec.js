const request = require('supertest');
const server = require('../src/app').server;

describe("server testing university", () => {
  
  it('should return 404',  (done) => {
    request(server)
    .get('/123')
    .expect(404)
    .end(done);
  });

  it('should return created',  (done) => {
    request(server).post('/create-uni')
    .send({name: 'ДНД'})
    .expect(201).end(done);
  });

  it('should return 400 on creation',  (done) => {
    request(server).post('/create-uni')
    .send({nam: 'ДНД'})
    .expect(400)
    .end(done);
  });

  it('should return 200 on geting university',  (done) => {
    request(server).get('/get-uni')
    .query({ id: 1 })
    .expect(200)
    .end(done);
  });

  it('should return 400 on geting university',  (done) => {
    request(server).get('/get-uni')
    .query({ id: 500 })
    .expect(200)
    .end(done);
  });

  it('should return 200 on geting university with pages',  (done) => {
    request(server).get('/get-uni-pages')
    .expect(200)
    .end(done);

    request(server).get('/get-uni-pages')
    .send({name: 'Д'})
    .expect(200)
    .end(done);

    request(server).get('/get-uni-pages')
    .send({page: 1})
    .expect(200)
    .end(done);
  });

  it('should return 400 on geting university with pages',  (done) => {

    request(server).get('/get-uni-pages')
    .send({nam: 'Д'})
    .expect(400)
    .end(done);

  });

  it('should return 404 on geting university with pages',  (done) => {

    request(server).get('/get-uni-pages')
    .send({page: 800})
    .expect(404)
    .end(done);

  });

  
  
});
