const SalesService = require('../Services/SalesService');

const getAllSales = async (_req, res) => {
  const { message } = await SalesService.getSales();

  return res.status(200).json(message);
};

module.exports = {
  getAllSales,
};
