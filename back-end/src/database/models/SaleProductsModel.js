const SaleModel = require("./SaleModel");

const SaleProduct = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('SaleProductModel', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'SalesModel',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'ProductsModel',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
    {
      tableName: 'sales_products',
      underscored: true,
      timestamps: false,
    });

  SaleProductTable.associate = ({ SaleProductModel, SaleModel, ProductModel }) => {
    SaleModel.belongsToMany(ProductModel, {
      as: 'sales',
      foreignKey: 'saleId',
      otherKey: 'productId',
      through: SaleProductTable,
    });

    ProductModel.belongsToMany(SaleModel, {
      as: 'products',
      foreignKey: 'productId',
      otherKey: 'saleId',
      through: SaleProductTable,
    });
    SaleProductModel.belongsTo(ProductModel, { foreignKey: 'productId', as: 'product' });
  };

  return SaleProductTable;
}

module.exports = SaleProduct;
