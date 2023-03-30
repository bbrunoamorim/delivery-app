const express = require('express');
const cors = require('cors');
const RegisterRouter = require('./Routes/RegisterRoutes');
const LoginRouter = require('./Routes/loginRoutes');
const ProductRouter = require('./Routes/ProductRoutes');

const app = express();

app.use(express.json());
app.use(cors());
<<<<<<< HEAD
app.get('/coffee', (_req, res) => res.status(418).end());
=======
app.use(express.static('public'));
>>>>>>> 8cf5dbc63b211212b8aa8d7606e0d974c442f194
app.use('/register', RegisterRouter);
app.use('/login', LoginRouter);
app.use('/products', ProductRouter);

module.exports = app;
