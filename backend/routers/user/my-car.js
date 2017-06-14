'use strict';

const router = require('express').Router();

const carRepository = require('../../db/car-repository');

module.exports = router;

router.get('/user/my-car', [myCar]);

function myCar(req, res, next) {
  const user = req.user;

  carRepository.findByHolder(user.id)
    .then(entities => {
      if (entities.length === 1)
        return res.json(entities[0]);

      res.json({})
    })
    .catch(next);
}
