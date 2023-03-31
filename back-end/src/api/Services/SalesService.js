const { SaleModel, UserModel } = require('../../database/models');

const getSaleById = async (sellerId) => {
  const sales = await SaleModel.findOne({
    where: { id: sellerId },
    include: [{
    model: UserModel,
    as: 'seller',
    attributes: ['name'],
  }] });

  return { type: null, message: sales };
};

module.exports = {
  getSaleById,
};