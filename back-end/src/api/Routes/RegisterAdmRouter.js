const express = require('express');

const router = express.Router();
const RegisterController = require('../Controllers/RegisterController');
const authValidation = require('../middlewares/auth.validate');

router.post('/', authValidation.validateToken, RegisterController.createAdm);

module.exports = router;
