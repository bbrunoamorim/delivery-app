const express = require('express');
const RegisterRouter = require('./Routes/RegisterRoutes');

const app = express();

app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/register', RegisterRouter);
module.exports = app;