module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('UserModel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'customer'
    },
  },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false
    });


  UserTable.associate = ({ SaleModel }) => {
    UserTable.hasMany(SaleModel, { foreignKey: 'user_id', as: 'user' });
    UserTable.hasMany(SaleModel, { foreignKey: 'seller_id', as: 'seller' });
  }

  return UserTable;
}
