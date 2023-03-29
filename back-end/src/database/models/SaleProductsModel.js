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
      timestamps: false
    });

  SaleProductTable.associate = ({ SalesModel, ProductsModel }) => {
    SalesModel.belongsToMany(ProductsModel, {
      as: 'sales',
      foreignKey: 'salesId',
      otherKey: 'productId',
      through: SaleProductTable,
    });

    ProductsModel.belongsToMany(SalesModel, {
      as: 'products',
      foreignKey: 'productId',
      otherKey: 'salesId',
      through: SaleProductTable,
    });
  };

  return SaleProductTable;
}

module.exports = SaleProduct;
