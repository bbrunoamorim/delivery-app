const SaleProduct = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('SaleProductModel', {
    sale_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'SalesModel',
        key: 'id'
      }
    },
    product_id: {
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
      tableName: 'salesProducts',
      underscored: true,
      timestamps: false
    });

  SalesProductsTable.associate = (models) => {
    models.SalesModel.belongsToMany(models.ProductsModel, {
      as: 'sales',
      foreignKey: 'id',
      otherKey: 'id',
      through: SaleProductTable,
    });

    models.ProductsTable.belongsToMany(models.SalesModel, {
      as: 'products',
      foreignKey: 'id',
      otherKey: 'id',
      through: SaleProductTable,
    });
  };

  return SaleProductTable;
}

module.exports = SaleProduct;
