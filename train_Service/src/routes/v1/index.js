const express = require('express');
const router = express.Router();

const {
  CityController,
  StationController,
  TrainInfoController,
  CategoryController,
} = require('../../controllers/index');

router.get('/city', CityController.getAll);
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);

router.post('/station', StationController.create);
router.get('/station', StationController.getAll);
router.delete('/station/:id', StationController.destroy);
router.get('/station/:id', StationController.get);
router.patch('/station/:id', StationController.update);

router.post('/trainInfo', TrainInfoController.create);
router.get('/trainInfo', TrainInfoController.getAll);
router.delete('/trainInfo/:id', TrainInfoController.destroy);
router.get('/trainInfo/:id', TrainInfoController.get);
router.patch('/trainInfo/:id', TrainInfoController.update);

router.post('/category', CategoryController.create);
router.get('/category', CategoryController.getAll);
router.delete('/category/:id', CategoryController.destroy);
router.get('/category/:id', CategoryController.get);
router.patch('/category/:id', CategoryController.update);

module.exports = router;
