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

const updateStatus = async (saleId, status) => {
  const sale = await SaleModel.findByPk(saleId);

  if (!sale) {
    return { type: 'error', message: 'Sale not found' };
  }

  sale.status = status;
  await sale.save();
  
  return { type: null, message: 'Sale updated successfully' };
};

const findAll = async () => {
  const sales = await SaleModel.findAll();
  return sales;
};

module.exports = {
  getSaleById,
  updateStatus,
  findAll,
};
