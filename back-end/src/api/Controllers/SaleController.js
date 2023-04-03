const SaleService = require('../Services/SaleService');
const { errorMap } = require('../utils');

const findAll = async (_req, res) => {
  const sales = await SaleService.findAll();

  return res.status(200).json(sales);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const sale = await SaleService.findById(id);

  if (!sale) {
    return res.status(errorMap.mapError('NOT_FOUND').json({ message: 'Sale Id not found' }));
  }

  return res.status(200).json(sale);
};

module.exports = {
  findAll,
  findById,
};
