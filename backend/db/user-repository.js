'use strict';
const ENTITY_TYPE = 'user';

const datastore = require('./dataset');

exports.saveFbUser = function saveFbUser(user) {
  const key = datastore.key([ENTITY_TYPE, user.profile.id]);

  const entity = {
    key,
    data: user
  };

  return datastore.save(entity)
};

exports.findByName = function findByName(name) {
  const query = datastore.createQuery(ENTITY_TYPE);
  query.filter('username', name);

  return query.run()
    .then((data) => {

      if (data[0].length !== 1)
        return null;
      const user = data[0][0];
      user.id = user[datastore.KEY].id;
      return Promise.resolve(user);
    });
};
