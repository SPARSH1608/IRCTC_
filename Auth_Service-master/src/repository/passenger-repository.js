const { PassengerInfo } = require('../models/index');

class PassengerInfoRepository {
  async createPassenger({
    user_id,
    train_id,
    category_id,
    name,
    date,
    age,
    seat_number,
  }) {
    try {
      const passenger = await PassengerInfo.create({
        user_id,
        train_id,
        category_id,
        name,
        date,
        age,
        seat_number,
      });
      return passenger;
    } catch (error) {
      console.log('something went wrong while creating category');
      throw { error };
    }
  }
}

module.exports = PassengerInfoRepository;
