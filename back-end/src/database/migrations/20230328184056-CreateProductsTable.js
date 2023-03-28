'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4, 2)
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('products');
  },
};
