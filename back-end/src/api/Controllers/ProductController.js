const ProductService = require('../Services/ProductService');

const findAll = async (_req, res) => {
  const products = await ProductService.findAll();
  return res.status(200).json(products);
};

module.exports = {
  findAll,
};
