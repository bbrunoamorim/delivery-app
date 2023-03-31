const SalesService = require('../Services/SalesService');

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { message } = await SalesService.getSaleById(id);

  return res.status(200).json(message);
};

module.exports = {
  getSaleById,
};
