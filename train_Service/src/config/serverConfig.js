const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  TRAIN_SERVICE_PATH: process.env.TRAIN_SERVICE_PATH,
  AUTH_SERVICE_PATH: process.env.AUTH_SERVICE_PATH,
};
