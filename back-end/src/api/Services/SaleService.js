const { SaleModel } = require('../../database/models');

const findAll = async () => {
  const sales = await SaleModel.findAll();
  return sales;
};

const findById = async (id) => {
  const sale = await SaleModel.findOne({
    where: { id },
  });
  return sale;
};

module.exports = {
  findAll,
  findById,
};
