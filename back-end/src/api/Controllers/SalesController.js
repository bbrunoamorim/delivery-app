const SalesService = require('../Services/SalesService');

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { message } = await SalesService.getSaleById(id);

  return res.status(200).json(message);
};

const updateStatus = async (req, res) => {
  const { id, status } = req.body;

  const result = await SalesService.updateStatus(id, status);

  if (result.type === 'error') {
    return res.status(404).json({ error: result.message });
  }

  return res.json({ success: result.message });
};

module.exports = {
  getSaleById,
  updateStatus,
};
