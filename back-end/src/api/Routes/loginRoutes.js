const express = require('express');
const LoginController = require('../Controllers/LoginController');

const router = express.Router();

router.post('/', LoginController.login);

module.exports = router;