const { TrainInfoService } = require('../services/index');

const trainInfoservice = new TrainInfoService();
//POST -> req.body
const create = async (req, res) => {
  try {
    const trainInfo = await trainInfoservice.createTrainInfo(req.body);
    return res.status(201).json({
      data: trainInfo,
      success: true,
      message: 'Successfully created trainInfo',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create trainInfo',
      err: error,
    });
  }
};
//delete-> city/:id
const destroy = async (req, res) => {
  try {
    const response = await trainInfoservice.deleteTrainInfo(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully deleted train info',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to delete trainInfo',
      err: error,
    });
  }
};
//GET-> /city/:id
const get = async (req, res) => {
  try {
    const response = await trainInfoservice.getTrainInfo(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully fetched a trainInfo',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to get the trainInfo',
      err: error,
    });
  }
};
//patch-> /city:id->req.body
const update = async (req, res) => {
  try {
    const response = await trainInfoservice.updateTrainInfo(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully updated  trainInfo',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to update trainInfo',
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const trainInfo = await trainInfoservice.getAllTrainInfo(req.query);
    return res.status(200).json({
      data: trainInfo,
      success: true,
      message: 'Successfully fetched all trainInfo',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch trainInfo',
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
