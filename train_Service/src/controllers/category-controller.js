const { CategoryService } = require('../services/index');

const categoryService = new CategoryService();
//POST -> req.body
const create = async (req, res) => {
  try {
    const response = await categoryService.createCategory(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: 'Successfully created category',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create category',
      err: error,
    });
  }
};
//delete-> city/:id
const destroy = async (req, res) => {
  try {
    const response = await categoryService.deleteCategory(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully deleted category',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to delete category',
      err: error,
    });
  }
};
//GET-> /city/:id
const get = async (req, res) => {
  try {
    const response = await categoryService.getCategory(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully fetched a category',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to get the category',
      err: error,
    });
  }
};
//patch-> /city:id->req.body
const update = async (req, res) => {
  try {
    const response = await categoryService.updateCategory(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully updated  category',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to update category',
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const trainInfo = await categoryService.getAllCategory(req.query);
    return res.status(200).json({
      data: trainInfo,
      success: true,
      message: 'Successfully fetched all category',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch category',
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
