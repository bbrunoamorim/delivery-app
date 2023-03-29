const { ProductModel } = require('../../database/models');

const findAll = async () => {
  const products = await ProductModel.findAll();
  return products;
};

module.exports = {
  findAll,
};
