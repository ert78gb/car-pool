'use strict';

const router = require('express').Router();
const jwt = require('jsonwebtoken');

const constants = require('../../constants');
const ValidationError = require('../../error/validationError');
const userRepository = require('../../db/user-repository');

module.exports = router;

router.post('/login', [login]);

function login(req, res, next) {
  const model = req.body;

  validateModel(model)
    .then((model) => {
      return userRepository.findByName(model.username);
    })
    .then((user) => {
      if (!user || user.username !== model.username || user.password !== model.password) {
        throw new ValidationError('wrong_username_or_password');
      }

      delete user.password;
      const token = jwt.sign(user, constants.secret, {expiresIn: "24h"});

      res.json({token});
    })
    .catch(next);

}

function validateModel(model) {
  return new Promise((resolve, reject) => {
    if (!model.username)
      return reject(new ValidationError('wrong_username'));

    if (!model.password)
      return reject(new ValidationError('wrong_password'));

    return resolve(model);
  })
}
