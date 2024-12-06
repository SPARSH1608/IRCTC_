const { TrainInfoRepository } = require('../repository/index');

class TrainInfoService {
  constructor() {
    this.traininfoRepository = new TrainInfoRepository();
  }
  async createTrainInfo(data) {
    try {
      const train = await this.traininfoRepository.createTrain(data);
      return train;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }
  async deleteTrainInfo(trainInfoId) {
    try {
      const response = await this.traininfoRepository.deleteTrain(trainInfoId);
      return response;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }
  async updateTrainInfo(trainInfoId, data) {
    try {
      const train = await this.traininfoRepository.updateTrain(
        trainInfoId,
        data
      );
      return train;
    } catch (error) {
      console.log('Something went wrong in service layer');
      throw { error };
    }
  }

  async getTrainInfo(trainInfoId) {
    try {
      console.log(trainInfoId);
      const train = await this.traininfoRepository.getTrain(trainInfoId);
      return train;
    } catch (error) {
      console.log('Something went wrong at service layer');
      throw { error };
    }
  }
  async getAllTrainInfo(filter) {
    try {
      const trains = await this.traininfoRepository.getAllTrains({
        name: filter.name,
      });
      return trains;
    } catch (error) {
      console.log('Something went wrong at service layer');
      throw { error };
    }
  }
}
module.exports = TrainInfoService;
