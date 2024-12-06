const { StationService } = require('../services/index');

const stationService = new StationService();
//POST -> req.body
const create = async (req, res) => {
  try {
    const city = await stationService.createStation(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: 'Successfully created station',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create station',
      err: error,
    });
  }
};
//delete-> city/:id
const destroy = async (req, res) => {
  try {
    const response = await stationService.deleteStation(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully deleted station',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to delete station',
      err: error,
    });
  }
};
//GET-> /city/:id
const get = async (req, res) => {
  try {
    const response = await stationService.getStation(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully fetched a station',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to get the station',
      err: error,
    });
  }
};
//patch-> /city:id->req.body
const update = async (req, res) => {
  try {
    const response = await stationService.updateStation(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully updated a station',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to update station',
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await stationService.getAllStation(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: 'Successfully fetched all stations',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch station',
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
