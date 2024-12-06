// first thing should we should get models
const { Op } = require('sequelize');
const { Station } = require('../models/index');

class StationRepository {
  async createStation({ name }) {
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

  async deleteCity(id) {
    try {
      await City.destroy({
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      console.log('something went wrong while deleting city');
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log('something went wrong while updating the city');
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log('Something went wrong while fetching city');
      throw { error };
    }
  }
  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
          limit: 5,
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw { error };
    }
  }
}

module.exports = CityRepository;
