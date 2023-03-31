const { SaleProductModel } = require('../../database/models');

const getSalesProducts = async () => {
  const salesProducts = await SaleProductModel.findAll();

  return { type: null, message: salesProducts };
};
module.exports = {
  getSalesProducts,
};