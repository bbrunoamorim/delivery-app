const { SaleModel } = require('../../database/models');

const findAll = async () => {
  const sales = await SaleModel.findAll();
  return sales;
};

module.exports = {
  findAll,
};
