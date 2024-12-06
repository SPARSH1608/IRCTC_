'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Traininfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Category, {
        foreignKey: 'train_id',
      });
    }
  }
  Traininfo.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      model: { type: DataTypes.STRING, allowNull: false },
      total_capacity: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Traininfo',
    }
  );
  return Traininfo;
};
