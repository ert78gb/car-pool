'use strict';

const router = require('express').Router();

const roleMiddelware = require('../role-middleware');
const ValidationError = require('../../error/validationError');
const carRepository = require('../../db/car-repository');

module.exports = router;

router.post('/car/', [roleMiddelware('admin'), addNewCar]);

function addNewCar(req, res, next) {
  let model = req.body;

  validateModel(model)
    .then(() => convertModelToData(model))
    .then(carRepository.save)
    .then((saved) => {
      res.json(saved)
    })
    .catch(next)
}

function validateModel(model) {
  return new Promise((resolve, reject) => {

    if (!model.plateNr)
      return reject(new ValidationError('wrong_plateNr'));

    if (!model.year)
      return reject(new ValidationError('wrong_year'));

    if (!model.engineSize)
      return reject(new ValidationError('wrong_engineSize'));

    if (!model.petrol)
      return reject(new ValidationError('prong_petrol'));

    return resolve();
  })

}

function convertModelToData(model) {
  return Promise.resolve({
    plateNr: model.plateNr,
    year: model.year,
    engineSize: model.engineSize,
    petrol: model.petrol,
    holdUser: '-'
  })
}
