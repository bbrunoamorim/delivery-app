const SaleService = require('../Services/SaleService');

const findAll = async (_req, res) => {
  const sales = await SaleService.findAll();

  return res.status(200).json(sales);
};

module.exports = {
  findAll,
};
