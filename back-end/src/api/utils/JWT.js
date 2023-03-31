const jwt = require('jsonwebtoken');

const TOKEN_SECRET = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  try {
    return jwt.sign(payload, TOKEN_SECRET, jwtConfig);
  } catch (error) {
    throw new Error('Falha ao gerar token');
  }
};

const decodeToken = (token) => {
  if (!token) {
    throw new Error('Undefined Token');
  }

  try {
    const result = jwt.verify(token, TOKEN_SECRET);
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  generateToken,
  decodeToken,
};
