'use strict';

const router = require('express').Router();

const carRepository = require('../../db/car-repository');

module.exports = router;

router.get('/cars/', [list]);

function list(req, res, next) {
  const user = req.user;
  let isAdmin = false;

  if(user.roles){
    isAdmin = user.roles.some(role => role === 'admin');
  }

  carRepository.list(isAdmin)
    .then(entities => res.json(entities))
    .catch(next);
}
