'use strict';

const facebook = require('./auth/facebook');

function registerRoutes(app) {
  facebook.registerFacebookOAuth(app);
  app.use('/authentication/', require('./auth/login'));

  app.use('/', require('./health-check/gae'));

  app.use('/api/', require('./car/post'));
  app.use('/api/', require('./car/hold'));
  app.use('/api/', require('./car/list'));
  app.use('/api/', require('./car/release'));
  app.use('/api/', require('./car/km/post'));
  app.use('/api/', require('./car/km/list'));

  app.use('/api/', require('./user/my-car'));

  app.get('*', redirectToIndex);
}

module.exports.registerRoutes = registerRoutes;

function redirectToIndex(req, res) {
  return res.sendFile('/public/index.html', {root: __dirname + '/../..'});
}
