const express = require('express');
const cors = require('cors');
const RegisterRouter = require('./Routes/RegisterRoutes');
const LoginRouter = require('./Routes/loginRoutes');
const ProductRouter = require('./Routes/ProductRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/register', RegisterRouter);
app.use('/login', LoginRouter);
app.use('/products', ProductRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
