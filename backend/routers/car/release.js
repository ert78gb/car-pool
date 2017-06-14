'use strict';

const router = require('express').Router();
const Promise = require('bluebird');

const ValidationError = require('../../error/validationError');
const carRepository = require('../../db/car-repository');

module.exports = router;

router.post('/car/:plateNr/release', [release]);

function release(req, res, next) {
  const plateNr = req.params.plateNr;

  carRepository.findPlateNr(plateNr)
    .then((car) => {
      if (!car)
        throw new ValidationError('car_not_exist');

      if (car.holdUser === '-')
        throw res.sendStatus(200);

      car.holdUser = '-';
      return carRepository.save(car);
    })
    .then(() => res.sendStatus(200))
    .catch(next);
}

