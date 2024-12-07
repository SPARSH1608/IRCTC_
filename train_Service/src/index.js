const express = require('express');
const bodyParser = require('body-parser');
const CityRepository = require('./repository/city-repository');
const { PORT } = require('./config/serverConfig');
const db = require('./models/index');
const ApiRoutes = require('./routes/index');
const startServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', ApiRoutes);
  app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
  });
};
startServer();
