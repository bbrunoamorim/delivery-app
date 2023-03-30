const md5 = require('md5');
const { UserModel } = require('../../database/models');

const createUser = async (name, email, password) => {
  const passHashed = md5(password);
  const alreadyUserEmail = await UserModel.findOne({
    where: { email },
  });

  const alreadyUserName = await UserModel.findOne({
    where: { name },
  });

  if (alreadyUserEmail || alreadyUserName) {
    return { type: 409, message: 'Usuário já existe' };
  }
  const createUsers = await UserModel.create({ name, email, password: passHashed });
  return createUsers;
};

const findAll = async () => {
  const allUsers = await UserModel.findAll();
  return allUsers;
};

module.exports = {
  createUser,
  findAll,
};