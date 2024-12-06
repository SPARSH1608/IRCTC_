// first thing should we should get models
const { Op } = require('sequelize');
const { Category } = require('../models/index');

class CategoryRepository {
  async createCategory({
    category_name,
    category_seats,
    train_id,
    base_price,
  }) {
    try {
      const category = await City.create({
        category_name,
        category_seats,
        train_id,
        base_price,
      });
      return category;
    } catch (error) {
      console.log('something went wrong while creating category');
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
      console.log('something went wrong while deleting category');
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      const category = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return category;
    } catch (error) {
      console.log('something went wrong while updating the category');
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const category = await City.findByPk(cityId);
      return category;
    } catch (error) {
      console.log('Something went wrong while fetching category');
      throw { error };
    }
  }
  async getAllCities(filter) {
    try {
      if (filter.name) {
        const categories = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
          limit: 5,
        });
        return categories;
      }
      const category = await City.findAll();
      return category;
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw { error };
    }
  }
}

module.exports = CategoryRepository;
