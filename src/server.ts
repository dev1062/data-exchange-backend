import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
app.use(cors())

const port = process.env.PORT || 3000
const baseUrl = 'https://api.cryptowat.ch'

const server = app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})

app.get('/exchanges', (req, res) => {
  axios
    .get(`${baseUrl}/exchanges`)
    .then(function(response) {
      res.send(response.data)
    })
    .catch(function(error) {
      res.send({ error: error.message })
    })
})

app.get('/pairs/:exchange', (req, res) => {
  axios
    .get(`${baseUrl}/markets/${req.params.exchange}`)
    .then(function(response) {
      res.send(response.data)
    })
    .catch(function(error) {
      res.send({ error: error.message })
    })
})

app.get('/books/:exchange/:pair', (req, res) => {
  axios
    .get(`${baseUrl}/markets/${req.params.exchange}/${req.params.pair}/orderbook`)
    .then(function(response) {
      res.send(response.data)
    })
    .catch(function(error) {
      res.send({ error: error.message })
    })
})

module.exports = server
