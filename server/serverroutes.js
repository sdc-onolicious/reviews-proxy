const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const request = require('request');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/:id/reviews', (req, res) => {
  request(`http://localhost:3010/${req.params.id}/reviews`).pipe(res);
})

app.get('/:id/summary', (req, res) => {
  request(`http://localhost:3010/${req.params.id}/summary`).pipe(res);
})

module.exports = app;