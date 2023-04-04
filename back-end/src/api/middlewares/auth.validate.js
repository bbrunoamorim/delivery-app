const { decodeToken } = require('../utils/JWT');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const { role } = decodeToken(authorization);
  if (role !== 'administrator') {
    return res.status(401).json({ message: 'Erro' });
  }

  return next();
};

module.exports = {
  validateToken,
};