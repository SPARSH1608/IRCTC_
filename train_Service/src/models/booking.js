'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.Traininfo, { foreignKey: 'train_id' });

      this.belongsTo(models.Station, {
        foreignKey: 'src_station_id',
        as: 'SourceStation',
      });
      this.belongsTo(models.Station, {
        foreignKey: 'dest_station_id',
        as: 'DestinationStation',
      });
    }
  }
  Booking.init(
    {
      train_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      no_of_seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      passenger_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      booking_status: {
        type: DataTypes.ENUM,
        values: ['pending', 'completed'],
        allowNull: false,
        defaultValue: 'pending',
      },

      src_station_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      dest_station_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Booking',
    }
  );
  return Booking;
};
