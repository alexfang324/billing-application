const express = require('express');
const productRouter = express.Router();
const path = require('path');
const ProductController = require('../controllers/ProductController');

productRouter.get('/', ProductController.Index);
// productRouter.get('/', ProductController.Detail);

module.exports = productRouter;
