'use strict';

const datastore = require('@google-cloud/datastore');
const path = require('path');

let dataset;

if (process.env.NODE_ENV === 'development') {
  dataset = datastore({
    keyFilename: path.join(__dirname, 'google-client-secret.json'),
    projectId: 'car-pool-001'
  });
}
else {
  dataset = datastore();
}

exports = module.exports = dataset;
