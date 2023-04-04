const { SaleModel, SaleProductModel, UserModel } = require('../../database/models');
const { decodeToken } = require('../utils/JWT');

const createOrder = async (data) => {
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, products, token } = data;
  const { email, role } = decodeToken(token);
  const user = await UserModel.findOne({ where: { email, role } });
  const sale = await SaleModel.create({
    userId: user.id,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status: 'Pendente',
  });
  await Promise.all(products
    .map(({ id, quantity }) => SaleProductModel.create({ productId: id,
    quantity,
    saleId: sale.id,
  })));
  return sale.id;
};

const getSellers = async () => {
  const sellers = await UserModel.findAll({ where: { role: 'seller' } });

  return sellers;
};

module.exports = {
  createOrder,
  getSellers,
};