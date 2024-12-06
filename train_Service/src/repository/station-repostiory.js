// first thing should we should get models
const { Op } = require('sequelize');
const { Station } = require('../models/index');

class StationRepository {
  async createStation({ name, address, platform_count, city_id }) {
    try {
      const station = await Station.create({
        name,
        address,
        platform_count,
        city_id,
      });
      return station;
    } catch (error) {
      console.log('something went wrong while creating station');
      throw { error };
    }
  }

  async deleteStation(id) {
    try {
      await Station.destroy({
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      console.log('something went wrong while deleting station');
      throw { error };
    }
  }
  async updateStation(stationId, data) {
    try {
      const station = await Station.findByPk(stationId);
      Object.keys(data).forEach((key) => {
        if (station[key] !== undefined) {
          station[key] = data[key];
        }
      });

      await station.save();
      return station;
    } catch (error) {
      console.log('something went wrong while updating the station');
      throw { error };
    }
  }
  async getStation(stationId) {
    try {
      const station = await Station.findByPk(stationId);
      return station;
    } catch (error) {
      console.log('Something went wrong while fetching station');
      throw { error };
    }
  }
  async getAllStation(filter) {
    try {
      if (filter.name) {
        const stations = await Station.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
          limit: 5,
        });
        return stations;
      }
      const stationList = await Station.findAll();
      return stationList;
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw { error };
    }
  }
}

module.exports = StationRepository;
