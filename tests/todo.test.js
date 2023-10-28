const app = require('../app')
const request = require('supertest');

test('Get 1 Data From List', (done) => {
    request(app)
        .get('/todos')
        .expect(200)
        .expect('Content-Type', /json/)
        .catch(done)
})