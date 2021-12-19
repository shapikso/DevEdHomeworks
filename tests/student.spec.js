const request = require('supertest');
const server = require('../src/app').server;

describe("server testing student", () => {

  it('should return created student',  (done) => {
    request(server).post('/create-student')
    .send({name: 'Гоша', surname: 'Вялый', universityId: 1})
    .expect(201).end(done);
  });

  it('should return 400 on creation student',  (done) => {
    request(server).post('/create-student')
    .send({name: 'Сергей', surname: 'Вялый'})
    .expect(400).end(done);
  });

  it('should return 200 on geting students',  (done) => {
    request(server).get('/get-student-by-uni')
    .send({ id: 1 })
    .expect(200)
    .end(done);
  });

  it('should return 200 on geting changing student',  (done) => {
    request(server).put('/change-student')
    .send({ id: 1, name:'123', surname: '15', universityId: 2 })
    .expect(201)
    .end(done);
  });

  it('should return 400 on geting changing student',  (done) => {
    request(server).put('/change-student')
    .send({ name:'123', surname: '15', universityId: 2 })
    .expect(400)
    .end(done);

    request(server).put('/change-student')
    .send({})
    .expect(400)
    .end(done);
  });

  it('should return 400 on geting student',  (done) => {
    request(server).get('/get-student-by-uni')
    .query({ id: 15 })
    .expect(400)
    .end(done);

    request(server).get('/get-student-by-uni')
    .query({ name: '15' })
    .expect(400)
    .end(done);

    request(server).get('/get-student-by-uni')
    .query({ nam: '15' })
    .expect(400)
    .end(done);
  });

  it('should return 400 on geting student with pages',  (done) => {

    request(server).get('/get-student-by-uni')
    .send({page: 800})
    .expect(400)
    .end(done);

  });

  it('should return 201 on deleting student',  (done) => {
    request(server).delete('/delete-student')
    .query({ id: 1})
    .expect(201)
    .end(done);
  });

  it('should return 400 on deleting student',  (done) => {
    request(server).delete('/delete-student')
    .query({ id: 500})
    .expect(400)
    .end(done);

    request(server).delete('/delete-student')
    .expect(400)
    .end(done);
  });
  
});