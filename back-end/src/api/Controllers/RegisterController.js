// const { UserModel } = require('../../database/models');
const RegisterService = require('../Services/RegisterService');
// const Token = require('../utils/JWT');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await RegisterService.createUser(name, email, password);

  if (!newUser.type) {
    return res.status(201).json(newUser);
  }
  return res.status(newUser.type).json({ message: newUser.message });
};

const findAll = async (req, res) => {
  const allUsers = await RegisterService.findAll();
  return res.status(200).json(allUsers);
};

const createAdm = async (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = await RegisterService.createAdm(name, email, password, role);

  if (!newUser.type) {
    return res.status(201).json(newUser);
  }
  return res.status(newUser.type).json({ message: newUser.message });
};

module.exports = {
  createUser,
  findAll,
  createAdm,
};