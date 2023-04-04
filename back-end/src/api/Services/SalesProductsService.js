const { SaleProductModel, ProductModel } = require('../../database/models');

const getSalesProductsById = async (id) => {
  const salesProducts = await SaleProductModel.findAll({
    where: { saleId: id },
    include: [{
    model: ProductModel,
    as: 'product',
    attributes: ['name', 'price'],
  }] });

  return { type: null, message: salesProducts };
};

module.exports = {
  getSalesProductsById,
};