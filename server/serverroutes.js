const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const request = require('request');
const cors = require('cors');
const {PROD, TEST} = require('./serverEnv.js')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/:id', express.static(path.resolve(__dirname, '../public')));

app.get('/:id/reviews', (req, res) => {
  request(`http://${PROD}:4000/${req.params.id}/reviews`).pipe(res);
})

app.get('/:id/summary', (req, res) => {
  request(`http://${PROD}:4000/${req.params.id}/summary`).pipe(res);
})
module.exports = app;

