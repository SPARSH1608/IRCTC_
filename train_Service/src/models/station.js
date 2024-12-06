'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey: 'city_id',
        onDelete: 'CASCADE',
      });
      this.hasMany(models.TrainStop, {
        foreignKey: 'src_station_id',
        as: 'SourceTrainStops',
      });
      this.hasMany(models.TrainStop, {
        foreignKey: 'dest_station_id',
        as: 'DestinationTrainStops',
      });
    }
  }
  Station.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      city_id: { type: DataTypes.INTEGER, allowNull: false },
      platform_count: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Station',
    }
  );
  return Station;
};
