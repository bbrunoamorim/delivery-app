'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'UserModel',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sellerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'SellerModel',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2)
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  },
};
