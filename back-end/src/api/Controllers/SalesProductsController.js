const SalesProductsService = require('../Services/SalesProductsService');

const getSalesProductsById = async (req, res) => {
  const { id } = req.params;
  const { message } = await SalesProductsService.getSalesProductsById(id);

  return res.status(200).json(message);
};

module.exports = {
  getSalesProductsById,
};
