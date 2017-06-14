'use strict';

const router = require('express').Router();
const Promise = require('bluebird');

const ValidationError = require('../../error/validationError');
const carRepository = require('../../db/car-repository');

module.exports = router;

router.post('/car/:plateNr/hold', [addNewCar]);

function addNewCar(req, res, next) {
  const plateNr = req.params.plateNr;
  const user = req.user;

  Promise.all([
    carRepository.findPlateNr(plateNr),
    carRepository.findByHolder(user.id)
  ])
    .then((result) => {
      const car = result[0];
      const userCars = result[1];

      if (!car)
        throw new ValidationError('car_not_exist');

      if (car.holdUser !== '-')
        throw new ValidationError('car_is_not_free');

      if (userCars.length !== 0)
        throw new ValidationError('user_has_hold');

      car.holdUser = user.id;
      return carRepository.save(car);
    })
    .then(() => res.sendStatus(200))
    .catch(next);
}

