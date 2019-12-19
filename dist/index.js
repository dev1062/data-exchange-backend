"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
const port = process.env.PORT || 3000;
const server = 'https://api.cryptowat.ch';
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
app.get('/exchanges', (req, res) => {
    axios_1.default
        .get(`${server}/exchanges`)
        .then(function (response) {
        res.send(response.data.result);
    })
        .catch(function (error) {
        res.send({ error: error.message });
    });
});
app.get('/pairs/:exchange', (req, res) => {
    axios_1.default
        .get(`${server}/markets/${req.params.exchange}`)
        .then(function (response) {
        res.send(response.data);
    })
        .catch(function (error) {
        res.send({ error: error.message });
    });
});
app.get('/books/:exchange/:pair', (req, res) => {
    axios_1.default
        .get(`${server}/markets/${req.params.exchange}/${req.params.pair}/orderbook`)
        .then(function (response) {
        res.send(response.data);
    })
        .catch(function (error) {
        res.send({ error: error.message });
    });
});
//# sourceMappingURL=index.js.map