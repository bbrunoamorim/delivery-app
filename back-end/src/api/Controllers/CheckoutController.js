import CheckoutService from '../Services/CheckoutService';

const createOrder = async (req, res) => {
  const { data } = req.body;

  await CheckoutService.createOrder(data);

  return res.status(201).send();
};

module.exports = {
  createOrder,
};