const request = require('supertest');

describe('GET Endpoints', () => {
  var server;
  beforeEach(function () {
    server = require('./server');
  });
  afterEach(function () {
    server.close();
  });

  it('should create a new get request', async () => {
    const app = server;
    const res = await request(app)
      .get('/pairs/binance')
      .send()
    expect(res.statusCode).toEqual(200)
  })
})
