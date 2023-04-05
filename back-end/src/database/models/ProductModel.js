const Product = (sequelize, DataTypes) => {
  const ProductTable = sequelize.define('ProductModel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
    {
      tableName: 'products',
      underscored: true,
      timestamps: false,
    });

    ProductTable.associate = ({SaleProductModel, ProductModel}) => {     
      ProductModel.hasMany(SaleProductModel, { foreignKey: 'productId' });
    };
  


  return ProductTable;
}

module.exports = Product;
