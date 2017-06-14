'use strict';

const router = require('express').Router();

const constants = require('../../constants');

module.exports = router;

router.get('/_ah/health', [ah]);

function ah(req, res) {
  res.sendStatus(200);
}
