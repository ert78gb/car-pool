'use strict';
const ENTITY_TYPE = 'car';
const KM_ENTITY_TYPE = 'km';

const datastore = require('./dataset');

exports.save = function save(car) {
  const key = datastore.key([ENTITY_TYPE, car.plateNr]);

  const entity = {
    key,
    data: car
  };

  return datastore.save(entity)
    .then(() => {
      return Promise.resolve(car);
    })
};

exports.findPlateNr = function findById(plateNr) {
  const key = datastore.key([ENTITY_TYPE, plateNr]);

  return datastore.get(key)
    .then((entities) => {
      if (entities.length === 0)
        return Promise.resolve(null);

      return Promise.resolve(entities[0]);
    })

};

exports.list = function list(showHolds) {
  const query = datastore.createQuery(ENTITY_TYPE);

  if (!showHolds) {
    query.filter('holdUser', '-')
  }

  return query.run()
    .then((data) => {
      return Promise.resolve(data[0]);
    });
};

exports.findByHolder = function findByHolder(userId) {
  const query = datastore.createQuery(ENTITY_TYPE);

  query.filter('holdUser', userId);

  return query.run()
    .then((data) => {
      return Promise.resolve(data[0]);
    });
};

exports.listKms = function findByHolder(plateNr) {
  const query = datastore.createQuery([KM_ENTITY_TYPE]);
  query.hasAncestor(datastore.key([ENTITY_TYPE, plateNr]));

  return query.run()
    .then((data) => {
      return Promise.resolve(data[0]);
    });
};

exports.addKm = function addKm(plateNr, km) {
  const key = datastore.key([ENTITY_TYPE, plateNr, KM_ENTITY_TYPE]);

  const entity = {
    key,
    data: km
  };

  return datastore.save(entity)
    .then(() => {
      km.id = key.id;
      return Promise.resolve(km);
    })
};
