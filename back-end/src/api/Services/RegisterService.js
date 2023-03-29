const { UserModel } = require('../../database/models');

const createUser = async (name, email, password, role) => {
  const alreadyUserEmail = await UserModel.findOne({
    where: { email },
  });

  const alreadyUserName = await UserModel.findOne({
    where: { name },
  });

  if (alreadyUserEmail || alreadyUserName) {
    return { type: 409, message: 'Conflict' };
  }
  const createUsers = await UserModel.create({ name, email, password, role });
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