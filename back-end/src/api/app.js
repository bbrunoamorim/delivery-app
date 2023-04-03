const express = require('express');
const cors = require('cors');
const RegisterRouter = require('./Routes/RegisterRoutes');
const LoginRouter = require('./Routes/loginRoutes');
const ProductRouter = require('./Routes/ProductRoutes');
const CheckoutRouter = require('./Routes/checkoutRoutes');
const SalesRouter = require('./Routes/SalesRoutes');
const RegisterAdmRouter = require('./Routes/RegisterAdmRouter');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/register', RegisterRouter);
app.use('/admin/manage', RegisterAdmRouter);
app.use('/login', LoginRouter);
app.use('/products', ProductRouter);
app.use('/checkout', CheckoutRouter);
app.use('/orders', SalesRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
