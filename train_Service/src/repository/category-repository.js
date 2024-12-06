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
      const category = await Category.create({
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

  async deleteCategory(id) {
    try {
      await Category.destroy({
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
  async updateCategory(categoryId, data) {
    try {
      const category = await Category.findByPk(categoryId);
      Object.keys(data).forEach((key) => {
        if (category[key] !== undefined) {
          category[key] = data[key];
        }
      });
      await category.save();
      return category;
    } catch (error) {
      console.log('something went wrong while updating the category');
      throw { error };
    }
  }
  async getCategory(categoryId) {
    try {
      const category = await Category.findByPk(categoryId);
      return category;
    } catch (error) {
      console.log('Something went wrong while fetching category');
      throw { error };
    }
  }
  async getAllCategories(filter) {
    try {
      if (filter.name) {
        const categories = await Category.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
          limit: 5,
        });
        return categories;
      }
      const category = await Category.findAll();
      return category;
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw { error };
    }
  }
}

module.exports = CategoryRepository;
