'use strict';

const router = require('express').Router();

const ValidationError = require('../../../error/validationError');
const carRepository = require('../../../db/car-repository');

module.exports = router;

router.post('/car/:plateNr/km', [addKm]);

function addKm(req, res, next) {
  const model = req.body;
  const user = req.user;
  const plateNr = req.params.plateNr;

  validateModel(model)
    .then(() => convertModelToData(model, user))
    .then((km)=> carRepository.addKm(plateNr, km))
    .then((saved) => {
      res.json(saved)
    })
    .catch(next)
}

function validateModel(model) {
  return new Promise((resolve, reject) => {

    if (!model.km)
      return reject(new ValidationError('wrong_km'));

    return resolve();
  })

}

function convertModelToData(model, user) {
  return Promise.resolve({
    km: model.km,
    creator: user.id,
    eventTime: new Date(),
    business: model.business
  });
}
