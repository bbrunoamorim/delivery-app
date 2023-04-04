const loginService = require('../Services/loginService');
const { errorMap, jwt } = require('../utils');

const login = async (req, res) => {
  // const { email, password } = req.body;

  // if (!email || !password) {
  //   return res.status(errorMap.mapError('FIELDS_ARE_MISSING'))
  //     .json({ message: 'Some required fields are missing' });
  // }
  const { type, message } = await loginService.login(req.body);
  console.log(message.dataValues);

  if (type) return res.status(errorMap.mapError(type)).json({ message: 'Not found' });

  const loginValid = {
    name: message.name,
    email: message.email,
    role: message.role,
  };
  const token = jwt.generateToken(loginValid);
  // const decode = jwt.decodeToken(authorization);

  // if (decode.role !== message.dataValues.role) {
  //   return res.status(401).json({ message: 'Erro' });
  // }
  // if (!authorization) return decode;
  // console.log(decode);
  return res.status(200).json({ message: { ...loginValid, token } });
};

module.exports = {
  login,
};
