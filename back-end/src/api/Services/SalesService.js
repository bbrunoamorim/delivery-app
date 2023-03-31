const { SaleModel } = require('../../database/models');

const getSales = async () => {
  const sales = await SaleModel.findAll();

  return { type: null, message: sales };
};

module.exports = {
  getSales,
};