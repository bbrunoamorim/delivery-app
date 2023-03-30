const md5 = require('md5');
const { UserModel } = require('../../database/models');

const login = async (data) => {
  const { email, password } = data;
  const userExists = await UserModel.findOne({ where: { email } });

  if (!userExists || userExists.password !== md5(password)) {
    return { type: 'NOT_FOUND', message: 'Not found' };
  }

  return { type: null, message: userExists };
};

module.exports = {
  login,
};