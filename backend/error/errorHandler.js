'use strict';

const ValidationError = require('./validationError');

function errorHandler(err, req, res, next) {
  if (err.name === 'ValidationError')
    return res.status(400).json(err);

  if (err.name === 'UnauthorizedError' && err.code === 'credentials_required')
    return res.status(err.status).json(err.message);

  if (err.name === 'UnauthorizedError' && err.code === 'invalid_token')
    return res.status(err.status).json(err.message);

  console.error(err);

  return res.status(500).json(err);
}

module.exports = errorHandler;
