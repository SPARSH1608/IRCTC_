const { BookingService } = require('../services/index');

const bookingService = new BookingService();

const create = async (req, res) => {
  try {
    // console.log('req', req);
    console.log('Request Body:', req.body);
    console.log('Passenger Data:', req.body.passengerData);
    const response = await bookingService.createBooking(req.body);
    console.log('FROM BOOKING CONTROLLER', response);
    return res.status(200).json({
      message: 'Successfully completed booking',
      success: true,
      err: {},
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to do booking',
      err: error,
    });
  }
};

module.exports = { create };
