// first thing should we should get models
const { Op } = require('sequelize');
const { TrainStop } = require('../models/index');

class TrainStopRepository {
  async createTrainStop({
    train_id,
    src_station_id,
    dest_station_id,
    dest_city_id,
    src_city_id,

    days_of_operation,
    start_date,
    end_date,
  }) {
    try {
      const trainstop = await TrainStop.create({
        train_id,
        src_station_id,
        dest_station_id,
        dest_city_id,
        src_city_id,

        days_of_operation,
        start_date,
        end_date,
      });
      return trainstop;
    } catch (error) {
      console.log('something went wrong while creating trainstop', error);
      throw { error };
    }
  }

  async deleteTrainStop(id) {
    try {
      await TrainStop.destroy({
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      console.log('something went wrong while deleting trainstop');
      throw { error };
    }
  }
  async updateTrainStop(trainstopId, data) {
    try {
      const trainstop = await TrainStop.findByPk(trainstopId);
      Object.keys(data).forEach((key) => {
        if (trainstop[key] !== undefined) {
          trainstop[key] = data[key];
        }
      });

      await trainstop.save();
      return trainstop;
    } catch (error) {
      console.log('something went wrong while updating the trainstop');
      throw { error };
    }
  }
  async getTrainStop(trainstopId) {
    try {
      const trainstop = await TrainStop.findByPk(trainstopId);
      return trainstop;
    } catch (error) {
      console.log('Something went wrong while fetching trainstop');
      throw { error };
    }
  }
  async getAllTrainStop(filter) {
    try {
      if (filter.name) {
        const trainstops = await TrainStop.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
          limit: 5,
        });
        return trainstops;
      }
      const trainstoplist = await TrainStop.findAll();
      return trainstoplist;
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw { error };
    }
  }
}

module.exports = TrainStopRepository;
