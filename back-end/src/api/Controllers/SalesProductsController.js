const SalesProductsService = require('../Services/SalesProductsService');

const getAllSalesProducts = async (_req, res) => {
  const { message } = await SalesProductsService.getSalesProducts();

  return res.status(200).json(message);
};

module.exports = {
  getAllSalesProducts,
};
