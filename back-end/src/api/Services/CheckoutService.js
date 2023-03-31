const { SaleModel, SaleProductModel } = require('../../database/models');

const createOrder = async (data, userId) => {
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = data;
  const sale = await SaleModel.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date().toISOString(),
    status: 'Pendente',
  });
  await Promise.all(products
    .map(({ id, quantity }) => SaleProductModel.create({ productId: id,
    quantity,
    saleId: sale.id,
  })));
  return sale.id;
};

module.exports = {
  createOrder,
};