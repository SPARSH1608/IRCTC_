const { TrainStopRepository } = require('../repository/index');

class TrainStopService {
  constructor() {
    this.trainstoprepository = new TrainStopRepository();
  }
  async createTrainStop(data) {
    console.log('insied service', data);
    try {
      const response = await this.trainstoprepository.createTrainStop(data);
      return response;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }
  async deleteTrainStop(trainstopId) {
    try {
      const response = await this.trainstoprepository.deleteTrainStop(
        trainstopId
      );
      return response;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }
  async updateTrainStop(trainstopId, data) {
    try {
      const response = await this.trainstoprepository.updateTrainStop(
        trainstopId,
        data
      );
      return response;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }

  async getTrainStop(trainstopId) {
    try {
      console.log(trainstopId);
      const response = await this.trainstoprepository.getTrainStop(trainstopId);
      return response;
    } catch (error) {
      console.log('Something went wrong at service layer');
      throw { error };
    }
  }
  async getAllTrainStop(filter) {
    try {
      const response = await this.trainstoprepository.getAllTrainStop({
        name: filter.name,
      });
      return response;
    } catch (error) {
      console.log('Something went wrong at service layer');
      throw { error };
    }
  }
}
module.exports = TrainStopService;
