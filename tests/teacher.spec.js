const request = require('supertest');
const server = require('../src/app').server;

describe("server testing teacher", () => {

  it('should return created',  (done) => {
    request(server).post('/create-teacher')
    .send({name: 'Сергей', surname: 'Вялый', universityId: 1})
    .expect(201).end(done);
  });

  it('should return 400 on creation',  (done) => {
    request(server).post('/create-teacher')
    .send({name: 'Сергей', surname: 'Вялый'})
    .expect(400).end(done);
  });

  it('should return 200 on geting teachers',  (done) => {
    request(server).get('/get-teacher-by-uni')
    .send({ id: 1 })
    .expect(200)
    .end(done);
  });

  it('should return 400 on geting teachers',  (done) => {
    request(server).get('/get-teacher-by-uni')
    .query({ id: 15 })
    .expect(400)
    .end(done);

    request(server).get('/get-teacher-by-uni')
    .query({ name: '15' })
    .expect(400)
    .end(done);

    request(server).get('/get-teacher-by-uni')
    .query({ nam: '15' })
    .expect(400)
    .end(done);
  });

  it('should return 400 on geting teachers with pages',  (done) => {

    request(server).get('/get-teacher-by-uni')
    .send({page: 800})
    .expect(400)
    .end(done);

  });
  
});