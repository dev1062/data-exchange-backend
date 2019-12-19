import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
app.use(cors())

const port = process.env.PORT || 3000
const server = 'https://api.cryptowat.ch'

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})

app.get('/exchanges', (req, res) => {
  axios
    .get(`${server}/exchanges`)
    .then(function(response) {
      res.send(response.data.result)
    })
    .catch(function(error) {
      res.send({ error: error.message })
    })
})

app.get('/pairs/:exchange', (req: any, res) => {
  axios
    .get(`${server}/markets/${req.params.exchange}`)
    .then(function(response) {
      res.send(response.data)
    })
    .catch(function(error) {
      res.send({ error: error.message })
    })
})

app.get('/books/:exchange/:pair', (req: any, res) => {
  axios
    .get(`${server}/markets/${req.params.exchange}/${req.params.pair}/orderbook`)
    .then(function(response) {
      res.send(response.data)
    })
    .catch(function(error) {
      res.send({ error: error.message })
    })
})
