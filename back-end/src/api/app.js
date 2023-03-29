const express = require('express');
const RegisterRouter = require('./Routes/RegisterRoutes');
const ProductRouter = require('./Routes/ProductRoutes');

const app = express();

app.use(express.json());
app.use('/register', RegisterRouter);
app.use('/products', ProductRouter);

module.exports = app;
