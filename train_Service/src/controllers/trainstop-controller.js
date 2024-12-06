const { TrainStopService } = require('../services/index');

const trainstopService = new TrainStopService();
//POST -> req.body
const create = async (req, res) => {
  try {
    console.log(('inside controller', req.body));
    const response = await trainstopService.createTrainStop(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: 'Successfully created trainstop ',
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
    const response = await trainstopService.deleteTrainStop(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully deleted trainstop',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to delete trainstop',
      err: error,
    });
  }
};
//GET-> /city/:id
const get = async (req, res) => {
  try {
    const response = await trainstopService.getTrainStop(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully fetched a trainstop',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to get the trainstop',
      err: error,
    });
  }
};
//patch-> /city:id->req.body
const update = async (req, res) => {
  try {
    const response = await trainstopService.updateTrainStop(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully updated  trainstop',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to update trainstop',
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await trainstopService.getAllTrainStop(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully fetched all trainstop',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch trainstop',
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
