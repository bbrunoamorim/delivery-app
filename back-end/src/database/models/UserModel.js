const User = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('UserModel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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


  UserTable.associate = (models) => {
    models.UserTable.hasMany(models.SaleModel, {});
  }

  return UserTable;
}

module.exports = User;
