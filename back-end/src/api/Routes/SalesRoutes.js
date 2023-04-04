const express = require('express');
const SalesController = require('../Controllers/SalesController');
const SalesProductsController = require('../Controllers/SalesProductsController');

const router = express.Router();

router.post('/', SalesController.getAllSales);
router.get('/:id', SalesController.getSaleById);
router.get('/products/:id', SalesProductsController.getSalesProductsById);
router.patch('/update', SalesController.updateStatus); 

module.exports = router;