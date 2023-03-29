const jwt = require('jsonwebtoken');

const SECRET = 'secret_key';

const newtoken = (payload) => {
  const token = jwt.sign(payload, SECRET);
  return token;
};

module.exports = { newtoken };
