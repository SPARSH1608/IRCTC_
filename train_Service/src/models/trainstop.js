'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainStop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Station, {
        foreignKey: 'src_station_id',
        as: 'SourceStation',
      });
      this.belongsTo(models.Station, {
        foreignKey: 'dest_station_id',
        as: 'DestinationStation',
      });

      this.belongsTo(models.City, {
        foreignKey: 'src_city_id',
        as: 'SourceCity',
      });
      this.belongsTo(models.City, {
        foreignKey: 'dest_city_id',
        as: 'DestinationCity',
      });
      this.belongsTo(models.Traininfo, { foreignKey: 'train_id' });
    }
  }
  TrainStop.init(
    {
      train_id: DataTypes.INTEGER,
      src_station_id: DataTypes.INTEGER,
      dest_station_id: DataTypes.INTEGER,
      src_city_id: DataTypes.INTEGER,
      dest_city_id: DataTypes.INTEGER,
      start_time: DataTypes.TIME,
      end_time: DataTypes.TIME,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      days_of_operation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'TrainStop',
    }
  );
  return TrainStop;
};
