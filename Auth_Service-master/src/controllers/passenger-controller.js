const { PassengerInfoService } = require('../services/index');

const passengerInfoService = new PassengerInfoService();
//POST -> req.body
const create = async (req, res) => {
  try {
    const response = await passengerInfoService.createPassenger(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: 'Successfully created passenger',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create passenger',
      err: error,
    });
  }
};

module.exports = {
  create,
};
