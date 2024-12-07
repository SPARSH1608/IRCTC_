const { PassengerInfoRepository } = require('../repository/index');

class PassengerInfoService {
  constructor() {
    this.passengerInfoRepository = new PassengerInfoRepository();
  }
  async createPassenger(data) {
    try {
      const city = await this.passengerInfoRepository.createPassenger(data);
      return city;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }
}
module.exports = PassengerInfoService;
