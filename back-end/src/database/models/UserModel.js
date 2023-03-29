module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
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
    },
  },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false
    });


  UserTable.associate = ({ Sale }) => {
    UserTable.hasMany(Sale, { foreignKey: 'user_id', as: 'user' });
    UserTable.hasMany(Sale, { foreignKey: 'seller_id', as: 'seller' });
  }

  return UserTable;
}
