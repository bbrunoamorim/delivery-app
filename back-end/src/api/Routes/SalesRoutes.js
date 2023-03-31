const express = require('express');
const SalesController = require('../Controllers/SalesController');
const SalesProductsController = require('../Controllers/SalesProductsController');

const router = express.Router();

router.get('/', SalesController.getAllSales);
router.get('/products', SalesProductsController.getAllSalesProducts);

module.exports = router;