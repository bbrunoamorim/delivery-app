const express = require('express');
const CheckoutController = require('../Controllers/CheckoutController');

const router = express.Router();

router.post('/', CheckoutController.createOrder);

module.exports = router;