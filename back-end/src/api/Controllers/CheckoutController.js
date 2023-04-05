const CheckoutService = require('../Services/CheckoutService');

const createOrder = async (req, res) => {
  const { data } = req.body;

  const id = await CheckoutService.createOrder(data);

  return res.status(201).json({ id });
};

const getSellers = async (_req, res) => {
  const sellers = await CheckoutService.getSellers();
  return res.status(200).json({ sellers });
};

module.exports = {
  createOrder,
  getSellers,
};