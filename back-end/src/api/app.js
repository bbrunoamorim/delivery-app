const express = require('express');
const cors = require('cors');
const RegisterRouter = require('./Routes/RegisterRoutes');
const ProductRouter = require('./Routes/ProductRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/register', RegisterRouter);
app.use('/products', ProductRouter);

module.exports = app;
