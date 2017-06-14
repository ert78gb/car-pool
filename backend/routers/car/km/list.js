'use strict';

const router = require('express').Router();

const carRepository = require('../../../db/car-repository');

module.exports = router;

router.get('/car/:plateNr/kms', [list]);

function list(req, res, next) {
  let plateNr = req.params.plateNr;

  carRepository.listKms(plateNr)
    .then(entities => res.json(entities))
    .catch(next);
}
