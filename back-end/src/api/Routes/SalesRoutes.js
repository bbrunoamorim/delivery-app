const express = require('express');
const SalesController = require('../Controllers/SalesController');
const SalesProductsController = require('../Controllers/SalesProductsController');

const router = express.Router();

router.get('/:id', SalesController.getSaleById);
router.get('/products/:id', SalesProductsController.getSalesProductsById);

module.exports = router;