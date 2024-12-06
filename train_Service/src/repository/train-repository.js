// first thing should we should get models
const { Op } = require('sequelize');
const { Traininfo } = require('../models/index');

class TrainInfoRepository {
  async createTrain({ name, model, total_capacity }) {
    try {
      const train = await Traininfo.create({ name, model, total_capacity });
      return train;
    } catch (error) {
      console.log('something went wrong while creating train');
      throw { error };
    }
  }

  async deleteTrain(id) {
    try {
      await Traininfo.destroy({
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      console.log('something went wrong while deleting train');
      throw { error };
    }
  }
  async updateTrain(trainId, data) {
    try {
      const train = await Traininfo.findByPk(trainId);
      Object.keys(data).forEach((key) => {
        if (train[key] !== undefined) {
          train[key] = data[key];
        }
      });
      await train.save();
      return train;
    } catch (error) {
      console.log('something went wrong while updating the train');
      throw { error };
    }
  }
  async getTrain(trainId) {
    try {
      const train = await Traininfo.findByPk(trainId);
      return train;
    } catch (error) {
      console.log('Something went wrong while fetching train');
      throw { error };
    }
  }
  async getAllTrains(filter) {
    try {
      if (filter.name) {
        const trains = await Traininfo.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
          limit: 5,
        });
        return trains;
      }
      const trains = await Traininfo.findAll();
      return trains;
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw { error };
    }
  }
}

module.exports = TrainInfoRepository;
