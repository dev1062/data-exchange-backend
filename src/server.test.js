describe('GET Endpoints', () => {
  it('should create a new get request', async () => {
    const res = await request(app)
      .get('/pairs/binance')
      .send()
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('get')
  })
})
