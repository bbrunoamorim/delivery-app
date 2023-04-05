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
      type: DataTypes.STRING,
    },
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
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

  saleTable.associate = ({ UserModel }) => {
    saleTable.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
    saleTable.belongsTo(UserModel, { foreignKey: 'sellerId', as: 'seller' });
  }

  return saleTable;
}

module.exports = Sale;
