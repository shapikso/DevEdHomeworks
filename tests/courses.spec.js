const request = require('supertest');
const server = require('../src/app').server;

describe("server testing courses", () => {

  it('should return 201 created course',  (done) => {
    request(server).post('/create-course')
    .send({name: 'DB', teacherId: 1})
    .expect(201).end(done);
  });

  it('should return 400 on creation course',  (done) => {
    request(server).post('/create-course')
    .send({name: 'Сергей', surname: 'Вялый'})
    .expect(400).end(done);

    request(server).post('/create-course')
    .send({nam: 'DB', teacherId: 1})
    .expect(400).end(done);

    request(server).post('/create-course')
    .send({name: 'DB'})
    .expect(400).end(done);
  });

  it('should return 200 on geting courses',  (done) => {
    request(server).get('/get-course-by-uni')
    .send({ id: 1 })
    .expect(200)
    .end(done);
  });

  it('should return 400 on geting courses',  (done) => {
    request(server).get('/get-course-by-uni')
    .query({ id: 15 })
    .expect(400)
    .end(done);

    request(server).get('/get-course-by-uni')
    .query({ name: '15' })
    .expect(400)
    .end(done);

    request(server).get('/get-course-by-uni')
    .query({ nam: '15' })
    .expect(400)
    .end(done);
  });

  it('should return 400 on geting courses with pages',  (done) => {

    request(server).get('/get-course-by-uni')
    .send({page: 800})
    .expect(400)
    .end(done);

  });

  it('should return 400 on deleting course',  (done) => {

    request(server).delete('/delete-course')
    .query({id: 2})
    .expect(201)
    .end(done);

  });

  it('should return 400 on deleting course',  (done) => {

    request(server).delete('/delete-course')
    .expect(400)
    .end(done);

    request(server).delete('/delete-course')
    .query({id: 555})
    .expect(400)
    .end(done);

  });

  it('should return 200 on students in course',  (done) => {

    request(server).get('/get-students-by-course')
    .send({id: 1})
    .expect(201)
    .end(done);

  });

  it('should return 400 on students in course',  (done) => {

    request(server).get('/get-students-by-course')
    .send({i: 1})
    .expect(400)
    .end(done);

    request(server).get('/get-students-by-course')
    .send()
    .expect(400)
    .end(done);
  });

  it('should return 200 on students avg marks in course',  (done) => {

    request(server).get('/get-students-marks-by-course')
    .send({id: 1})
    .expect(200)
    .end(done);
  });

  it('should return 400 on students avg marks in course',  (done) => {

    request(server).get('/get-students-marks-by-course')
    .send({i: 1})
    .expect(400)
    .end(done);

    request(server).get('/get-students-marks-by-course')
    .send({id: 666})
    .expect(400)
    .end(done);

    request(server).get('/get-students-marks-by-course')
    .send()
    .expect(400)
    .end(done);
  });

  it('should return 200 on deleting students and marks from course',  (done) => {

    request(server).delete('/delete-student-from-course')
    .query({id: 2})
    .expect(201)
    .end(done);
  });

  it('should return 400 on deleting students and marks from course',  (done) => {

    request(server).delete('/delete-student-from-course')
    .query({id: 666})
    .expect(400)
    .end(done);

    request(server).delete('/delete-student-from-course')
    .query()
    .expect(400)
    .end(done);

    request(server).delete('/delete-student-from-course')
    .query({i: 666})
    .expect(400)
    .end(done);


  });
});