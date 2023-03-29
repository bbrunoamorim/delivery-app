const loginService = require('../Services/loginService');
const { errorMap } = require('../utils');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(errorMap.mapError('FIELDS_ARE_MISSING'))
      .json({ message: 'Some required fields are missing' });
  }
  const { type } = await loginService.login(req.body);

  if (type) return res.status(errorMap.mapError(type)).send();

  return res.status(200).send();
};

module.exports = {
  login,
};