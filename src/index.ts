import express from 'express'
import axios from 'axios'

const app = express()
const port = process.env.PORT || 3000
const server = 'https://api.cryptowat.ch'

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/exchanges', (req, res) => {
  axios
    .get(`${server}/exchanges`)
    .then(function(response) {
      // handle success
      res.send(response.data.result)
    })
    .catch(function(error) {
      // handle error
      res.send({ error: error.message })
    })
})

app.get('/pairs/:exchange', (req: any, res) => {
  axios
    .get(`${server}/markets/${req.params.exchange}`)
    .then(function(response) {
      // handle success
      res.send(response.data)
    })
    .catch(function(error) {
      // handle error
      res.send({ error: error.message })
    })
})

app.get('/books/:exchange/:pair', (req: any, res) => {
  axios
    .get(`${server}/markets/${req.params.exchange}/${req.params.pair}/orderbook`)
    .then(function(response) {
      // handle success
      res.send(response.data)
    })
    .catch(function(error) {
      // handle error
      res.send({ error: error.message })
    })
})
