const express = require('express');
const clientRouter = express.Router();
const path = require('path');

clientRouter.get('/', (req, res) =>
  res.render('client-index', {
    title: 'Clients'
  })
);

module.exports = clientRouter;
