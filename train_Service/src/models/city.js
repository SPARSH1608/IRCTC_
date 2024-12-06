'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Station, {
        foreignKey: 'city_id',
      });
      this.hasMany(models.TrainStop, {
        foreignKey: 'src_city_id',
        as: 'SourceTrainStops',
      });
      this.hasMany(models.TrainStop, {
        foreignKey: 'dest_city_id',
        as: 'DestinationTrainStops',
      });
    }
  }
  City.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: 'City',
    }
  );
  return City;
};
