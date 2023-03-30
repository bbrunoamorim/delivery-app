// const { UserModel } = require('../../database/models');
const RegisterService = require('../Services/RegisterService');

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(req.body);
  const newUser = await RegisterService.createUser(name, email, password, role);

  if (!newUser.type) {
    return res.status(201).json(newUser);
  }
  return res.status(201).json(newUser);
};

const findAll = async (req, res) => {
  const allUsers = await RegisterService.findAll();
  return res.status(200).json(allUsers);
};

module.exports = {
  createUser,
  findAll,
};