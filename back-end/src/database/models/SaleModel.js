const Sale = (sequelize, DataTypes) => {
  const saleTable = sequelize.define('SaleModel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 2)
    },
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.NOW,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
    {
      tableName: 'sales',
      underscored: true,
      timestamps: false
    });

  saleTable.associate = (models) => {
    models.UserModel.belongsTo(models.UserModel, { foreignKey: 'userId', as: 'user' });
    models.UserModel.belongsTo(models.UserModel, { foreignKey: 'sellerId', as: 'seller' });
  }

  return saleTable;
}

module.exports = Sale;
