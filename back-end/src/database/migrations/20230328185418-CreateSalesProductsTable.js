'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products',
      {
        sale_id: {
          primaryKey: true,
          references: {
            model: 'SalesModel',
            key: 'id'
          }
        },
        product_id: {
          primaryKey: true,
          references: {
            model: 'ProductsModel',
            key: 'id'
          }
        },
        quantity: {
          allowNull: false,
          type: Sequelize.INTEGER
        }
      });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales_products');
  },
};
