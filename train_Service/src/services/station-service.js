const { StationRepository } = require('../repository/index');

class StationService {
  constructor() {
    this.stationRepository = new StationRepository();
  }
  async createStation(data) {
    console.log(data);
    try {
      const station = await this.stationRepository.createStation(data);
      return station;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }
  async deleteStation(stationId) {
    try {
      const response = await this.stationRepository.deleteStation(stationId);
      return response;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }
  async updateStation(stationId, data) {
    try {
      const station = await this.stationRepository.updateStation(
        stationId,
        data
      );
      return station;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }

  async getStation(stationId) {
    try {
      console.log(stationId);
      const station = await this.stationRepository.getStation(stationId);
      return station;
    } catch (error) {
      console.log('Something went wrong at service layer');
      throw { error };
    }
  }
  async getAllStation(filter) {
    try {
      const stations = await this.stationRepository.getAllStation({
        name: filter.name,
      });
      return stations;
    } catch (error) {
      console.log('Something went wrong at service layer');
      throw { error };
    }
  }
}
module.exports = StationService;
