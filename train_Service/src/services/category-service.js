const { CategoryRepository } = require('../repository/index');

class CategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }
  async createCategory(data) {
    console.log(data);
    try {
      const category = await this.categoryRepository.createCategory(data);
      return category;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }
  async deleteCategory(categoryId) {
    try {
      const response = await this.categoryRepository.deleteCategory(categoryId);
      return response;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }
  async updateCategory(categoryId, data) {
    try {
      const category = await this.categoryRepository.updateCategory(
        categoryId,
        data
      );
      return category;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }

  async getCategory(categoryId) {
    try {
      console.log(categoryId);
      const category = await this.categoryRepository.getCategory(categoryId);
      return category;
    } catch (error) {
      console.log('Something went wrong at service layer');
      throw { error };
    }
  }
  async getAllCategory(filter) {
    try {
      const categories = await this.categoryRepository.getAllCategories({
        name: filter.name,
      });
      return categories;
    } catch (error) {
      console.log('Something went wrong at service layer');
      throw { error };
    }
  }
}
module.exports = CategoryService;
