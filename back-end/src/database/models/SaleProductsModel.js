const SalesProducts = (sequelize, DataTypes) => {
  const SalesProductsTable = sequelize.define('SalesProductsModel', {
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
    models.SalesProductsTable.hasMany(models.SalesModel, {
      as: 'sales',
      foreignKey: 'id'
    });

    models.SalesProductsTable.hasMany(models.ProductsModel, {
      as: 'products',
      foreignKey: 'id'
    });
  };

  return SalesProductsTable;
}

module.exports = SalesProducts;
