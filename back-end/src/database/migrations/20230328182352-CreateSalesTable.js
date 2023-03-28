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
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'UserModel',
          key: 'id'
        },
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'SellerModel',
          key: 'id'
        },
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2)
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      sale_date: {
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
