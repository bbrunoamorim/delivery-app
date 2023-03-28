'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products',
      {
        saleId: {
          primaryKey: true,
          references: {
            model: 'SalesModel',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        productId: {
          primaryKey: true,
          references: {
            model: 'ProductsModel',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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
