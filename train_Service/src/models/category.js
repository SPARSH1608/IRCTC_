'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Traininfo, {
        foreignKey: 'train_id',
        onDelete: 'CASCADE',
      });
    }
  }
  Category.init(
    {
      category_name: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['SL', '1A', '2A', '3A'],
        defaultValue: 'SL',
      },
      category_seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      train_id: { type: DataTypes.INTEGER, allowNull: false },
      base_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );
  return Category;
};
