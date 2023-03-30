const CheckoutService = require('../Services/CheckoutService');

const createOrder = async (req, res) => {
  const { data } = req.body;

  const id = await CheckoutService.createOrder(data);

  return res.status(201).json({ id });
};

module.exports = {
  createOrder,
};