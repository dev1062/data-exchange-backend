const moxios = require('moxios')
const request = require('supertest');
const express = require('express');

const initApp = () => {
  const app = express();
  return app;
}

describe('GET Endpoints', () => {
  beforeEach(function() {
    moxios.install()
  })

  afterEach(function() {
    moxios.uninstall()
  })

  it('should create a new get request', async () => {
    moxios.stubRequest(/exchanges/, {
      status: 200,
      response: [
        { id: 20, symbol: 'luno', name: 'Luno', route: 'https://api.cryptowat.ch/exchanges/luno', active: true },
        { id: 21, symbol: 'poloniex', name: 'Poloniex', route: 'https://api.cryptowat.ch/exchanges/poloniex', active: true },
        { id: 2, symbol: 'coinbase-pro', name: 'Coinbase Pro', route: 'https://api.cryptowat.ch/exchanges/coinbase-pro', active: true },
      ],
    })
    const app = initApp();
    await request(app).get('/exchanges');
    // const res = await request(app)
    //   .get('/pairs/binance')
    //   .send()
    // expect(res.statusCode).toEqual(201)
    // expect(res.body).toHaveProperty('get')
  })
})
