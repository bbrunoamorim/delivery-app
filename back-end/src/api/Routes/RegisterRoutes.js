const express = require('express');

const router = express.Router();
const RegisterController = require('../Controllers/RegisterController');

router.post('/', RegisterController.createUser);
router.get('/', RegisterController.findAll);

module.exports = router;
