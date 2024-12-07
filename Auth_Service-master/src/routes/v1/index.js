const express = require('express');

const UserController = require('../../controllers/user-controller');
const { AuthRequestValidators } = require('../../middlewares/index');
const PassengerController = require('../../controllers/passenger-controller');
const router = express.Router();

router.post(
  '/signup',
  AuthRequestValidators.validateUserAuth,
  UserController.create
);
router.post(
  '/signin',
  AuthRequestValidators.validateUserAuth,
  UserController.signIn
);

router.get('/isAuthenticated', UserController.isAuthenticated);

router.get(
  '/isAdmin',
  AuthRequestValidators.validateIsAdminRequest,
  UserController.isAdmin
);

router.post('/passenger', PassengerController.create);
module.exports = router;
